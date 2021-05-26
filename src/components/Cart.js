import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./UI/Checkout.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Fragment } from "react";
import axios from "axios";

function Cart(props) {
  let [removed, setRemoved] = useState(false);
  let removefromcart = (e, data) => {
    // console.log("eeeee",e)
    // this.closest('tr').fadeOut()
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "removecakefromcart",
      headers: { authtoken: localStorage.token },
      data: { cakeid: data },
    }).then(
      (response) => {
        console.log("API HIT: Cart Removed Success");
        setRemoved(true);
        if (response.data.message === "Removed  item from cart") {
          //resetting cart

          props.dispatch({
            type: "UPDATE-CART",
            payload: false,
          }); //resetting cart
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

      {props.cart?.data?.length > 0 ? (
        <table className="table table-stripped">
          <tr>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Remove</th>
          </tr>
          {props.cart?.data?.length > 0 &&
            props?.cart?.data?.map((each, i) => {
              return (
                <tr key={i}>
                  <td>{each.name}</td>
                  <td>
                    <img
                      src={each.image}
                      alt={each.name}
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td>{each.price}</td>
                  <td>{each.quantity}</td>
                  <td>
                    <button
                      onClick={(e) => removefromcart(e, each.product_id)}
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
      {props.cart?.data?.length > 0 && props.isLoggedin ? (
        <Link to="/checkout">
          <button className="btn btn-success">Checkout</button>
        </Link>
      ) : null}

      {/* <Footer /> */}
    </div>
  );
}

export default connect(function (state, props) {
  return {
    cart: state?.cart,
    isLoggedin: state?.isLoggedin,
  };
})(Cart);
