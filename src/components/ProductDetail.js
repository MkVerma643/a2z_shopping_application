import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { BASE_URL } from "./constants/Base_url";
import Footer from "./Footer";
import Header from "./Header";
import { Fragment } from "react";

toast.configure();

function ProductDetail(props) {
  const [productDetail, setProductDetail] = useState(null);
  let params = useParams();
  let pro_id = params.productid;

  useEffect(() => {
    showAllProducts();
  }, []);

  var showAllProducts = () => {
    var apiurl = BASE_URL + `api/product`;
    axios({
      url: apiurl,
      method: "get",
    }).then(
      (response) => {
        let filtered = response.data.data.docs.filter(
          (items) => items.id == pro_id
        );
        setProductDetail(filtered[0]);
        console.log("Response from all products api", filtered);
      },
      (error) => {
        console.log("Error from all products api ", error);
      }
    );
  };

  var addToCart = (productId) => {
    if (localStorage.token) {
      var userToken = localStorage.token;
      let addToCartUrl = BASE_URL + "api/cart";
      const data = {
        productId,
        quantity: "1",
      };
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
          } else {
            toast.warning("Product Already added in your cart");
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
      <div className="container">
        {productDetail && (
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1">
                      <img
                        style={{ width: "100%", height: "250px" }}
                        src={productDetail.mainImage}
                      />
                    </div>
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs">
                    {productDetail.subImages.map((subimage) => {
                      return (
                        <li className="active">
                          <a data-target="#pic-1" data-toggle="tab">
                            <img src={subimage} />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{productDetail.name}</h3>
                  <div className="rating">
                    <div className="stars">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <span className="review-no">
                      {productDetail.avgRating} rating
                    </span>
                  </div>
                  <p className="product-description">
                    {productDetail.description}
                  </p>
                  <h4 className="price">
                    current price: <span>{productDetail.price} INR</span>
                  </h4>
                  <p className="vote">
                    <strong>FEATURES: </strong>
                    {productDetail.features}
                  </p>

                  <h5 className="colors">
                    colors:
                    <span
                      style={{ background: productDetail.color.name }}
                      className="color"
                    ></span>
                  </h5>
                  <div className="action">
                    <button
                      onClick={() => addToCart(productDetail.id)}
                      className="add-to-cart btn btn-success"
                      type="button"
                    >
                      <i className="fa fa-cart-plus" aria-hidden="true">
                        {" "}
                        Add
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Fragment>
  );
}

export default connect()(ProductDetail);
