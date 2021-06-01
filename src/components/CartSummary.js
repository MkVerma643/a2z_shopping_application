import React from "react";
import { connect } from "react-redux";

function CartSummary(props) {
  let total = 0;

  return (
    <div>
      <center>{/* <h3>Cart Summary</h3> */}</center>
      <table className="table table-stripped">
        <tr>
          <th className="small_font">Cake Name</th>
          <th className="small_font">Cake Image</th>
          <th className="small_font">Cake Price</th>
        </tr>
        {props.cart?.data?.products?.length > 0 &&
          props.cart?.data?.products.map((each, index) => {
            {
              total += each.price * each.quantity;
            }
            return (
              <tr>
                <td className="small_font">
                  {each.name} ({each.quantity})
                </td>
                <td className="small_font">
                  <img
                    src={each.image}
                    alt={each.name}
                    style={{ width: "75px" }}
                  />
                </td>
                <td className="small_font">{each.price}</td>
              </tr>
            );
          })}
        <tr>
          <th colSpan="2">Total</th> <th>{total}</th>
        </tr>
      </table>
    </div>
  );
}

export default connect(function (state, props) {
  return {
    cart: state?.cart,
  };
})(CartSummary);
