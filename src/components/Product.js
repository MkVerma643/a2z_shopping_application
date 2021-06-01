import React from "react";
import "./UI/Product.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { BASE_URL } from "./constants/Base_url";
import axios from "axios";

function Product(props) {
  console.log(props.data);

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
    <div className="product" key={props.data._id}>
      <Link className="product" to={`/product/${props.data._id}`}>
        <div className="product_info">
          <p>{props.data.name}</p>
          <p className="product_">
            <small>₹</small>
            <strong>{props.data.price}</strong>
          </p>
          <div className="product_rating">
            {/* {Array(props.avgRating)
            .fill()
            .map((_) => ( */}
            <p>⭐</p>
            {/* ))} */}
            {props.data.avgRating}
          </div>
        </div>
        <img src={props.data.mainImage} alt="product image" />
      </Link>
      <button type="submit" onClick={() => addToCart(props._id)}>
        Add to backet
      </button>
    </div>
  );
}

export default Product;
