import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./UI/Checkout.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Fragment } from "react";
import axios from "axios";
import { BASE_URL } from "./constants/Base_url";

function Cart(props) {
  let [removed, setRemoved] = useState(false);

  console.log(localStorage.token);
  var userToken = localStorage.token;

  let removefromcart = (e, data) => {
    axios({
      method: "delete",
      url: BASE_URL + `api/cart/` + data,
      headers: {
        Authorization: userToken,
      },
      data: { productId: data },
    }).then(
      (response) => {
        console.log("API HIT: Product Removed Success");
        setRemoved(true);
        if (response.data.message === "Removed  item from cart") {
          props.dispatch({
            type: "UPDATE-CART",
            payload: false,
          });
        }
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  return (
    <div className="checkout">
      <Header />
      <div>
        <center>
          <h2 className="checkout_title">Your Shopping Cart</h2>
        </center>
      </div>

      {props.cart?.data?.products?.length > 0 ? (
        <table className="table table-stripped">
          <tr>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Remove</th>
          </tr>
          {props.cart?.data?.products?.length > 0 &&
            props?.cart?.data?.products?.map((each, i) => {
              return (
                <tr key={i}>
                  {/* {let filtered = props.products.data.filter(
                   (items) => items.id == each.id
                  ) } */}
                  <td>{each.id}</td>
                  <td>
                    <img
                      src={each.image}
                      alt={each.name}
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td>{each.totalAmount}</td>
                  <td>{each.quantity}</td>
                  <td>
                    <button
                      onClick={(e) => removefromcart(e, each.id)}
                      className="btn btn-danger"
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
        </table>
      ) : (
        <div className="alert alert-info">No item in Cart</div>
      )}
      <center>
        {props.cart?.data?.products?.length > 0 ? (
          <Link to="/checkout">
            <button className="btn btn-success">Checkout</button>
          </Link>
        ) : null}
      </center>
    </div>
  );
}

export default connect(function (state, props) {
  console.log("states in cart");
  return {
    cart: state?.cart,
    isLoggedin: state?.isLoggedin,
  };
})(Cart);
