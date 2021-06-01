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
        {/* {error ? <p className="alert-warning">Please Login First</p> : null} */}
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4">{productDetail[0]?.name}</h1>
            <img
              width="350px"
              className="singleimage"
              src={productDetail[0]?.mainImage}
            />
          </div>
          <div className="col-md-6">
            <h3>Description</h3>
            {/* {details.description ? details.description : "..."} */}
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
              {/* <li className="m-2">
                <b>Category: </b>{" "}
                {productDetail[0]?.category}
              </li> */}
              <hr className="my-3" />
              <li className="m-2">
                <b>ratings: </b>{" "}
                <span className="rating">
                  {productDetail[0]?.avgRatings} / 5
                </span>{" "}
              </li>
              <hr className="my-3" />
              {/* <li className="m-2">
                <b>Color: </b> {productDetail?.color}{" "}
              </li> */}
              <hr className="my-3" />
              <li className="m-2">
                <b>Features: </b> {productDetail[0]?.features}
              </li>
              <hr className="my-3" />
              {/* <li className="m-2">
                <b>Type: </b> {details.type}{" "}
              </li> */}
            </ul>
            <button
              id="addtocart"
              // onClick={() => addtocart(details)}
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
