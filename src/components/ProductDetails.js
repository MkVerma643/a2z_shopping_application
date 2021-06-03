import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { BASE_URL } from "./constants/Base_url";
import { useParams } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { toast } from "react-toastify";
import { Fragment } from "react";
import "./UI/Product.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetails(props) {
  const [productDetail, setProductDetail] = useState([]);
  let params = useParams();
  let pro_id = params._id;
  console.log(pro_id);

  const showAllProducts = () => {
    console.log("Details Function Ran");

    var apiurl = BASE_URL + `api/product`;
    axios({
      url: apiurl,
      method: "get",
    }).then(
      (response) => {
        var filtered = response.data.data.docs.filter(
          (items) => items.id == pro_id
        );
        let pro_data = filtered;
        console.log(pro_data[0]);
        setProductDetail(pro_data);
        // console.log("Response from all products api", filtered[0]);
        console.log("productDetails", productDetail);
      },
      (error) => {
        console.log("Error from all products api ", error);
      }
    );
  };

  useEffect(() => {
    showAllProducts();
  }, []);
  // return null;

  var addToCart = (productId) => {
    if (localStorage.token) {
      let addToCartUrl = BASE_URL + `api/cart`;
      console.log("user Token", localStorage.token);
      var userToken = localStorage.token;
      const data = {
        productId,
        quantity: "1",
      };
      console.log(productId, userToken);
      console.log("function add to cart called");
      axios({
        method: "post",
        url: addToCartUrl,
        headers: {
          Authorization: userToken,
        },
        data: data,
      }).then(
        (response) => {
          console.log("Response from addtocart api", response);
          if (response.data.success === true) {
            toast.success("Added to cart");
            props.dispatch({
              type: "UPDATE_CART_TRUE",
              cart_update: true,
            });
            console.log("product added in cart");
          } else {
            toast.warning("Product Already added in your cart");
            console.log("product Already added in cart");
          }
        },
        (error) => {
          toast.warning("Product Already in your cart");
        }
      );
    } else {
      toast.warning("Please login first");
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="jumbotron">
        <div className="row">
          {/* <div className="col-md-6">
            <h4 className="">{productDetail[0]?.name}</h4>
            <img
              width="350px"
              className="singleimage"
              src={productDetail[0]?.mainImage}
            />
          </div> */}
          <div className="preview col-md-6">
            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1">
                <img
                  style={{ width: "350px", height: "250px" }}
                  src={productDetail[0]?.mainImage}
                />
              </div>
            </div>
            <ul className="preview-thumbnail nav nav-tabs">
              {productDetail[0]?.subImages.map((subimage) => {
                return (
                  <li className="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src={subimage} width="350px" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Description</h3>
            <hr className="my-4" />

            <ul className="cart-details-list">
              <li className="m-2">
                {" "}
                <b>Price: </b> {productDetail[0]?.price}
              </li>
              <hr className="my-3" />
              <li className="m-2">
                <b>Description: </b>
                {productDetail[0]?.description}{" "}
              </li>
              <hr className="my-3" />

              <hr className="my-3" />
              <li className="m-2">
                <b>
                  <span className="product_rating">
                    {productDetail[0]?.avgRating > 0
                      ? Array(Math.round(productDetail[0]?.avgRating))
                          .fill()
                          .map(() => <p>⭐</p>)
                      : null}
                  </span>
                  Avg Ratings: {productDetail[0]?.avgRating}
                </b>
              </li>
              <hr className="my-3" />
              <li className="m-2">
                <b>
                  Color: &nbsp;
                  <span
                    className="col-2 p-3 mb-2 text-dark"
                    style={{
                      backgroundColor: productDetail[0]?.color?.name,
                    }}
                  >
                    {productDetail[0]?.color?.name}
                  </span>
                </b>
              </li>
              <hr className="my-3" />
              <li className="m-2">
                <b>Features: </b> {productDetail[0]?.features}
              </li>
              <hr className="my-3" />
            </ul>
            <button
              id="addtocart"
              onClick={() => addToCart(productDetail[0]?.id)}
              className="btn btn-success"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default connect()(ProductDetails);
