import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Profile(props) {
  var count = 0;

  return (
    <div>
      <Header />
      <div className=" p-3 ">
        <div className="row">
          <div className="col-md-5">
            <h1>My Profile</h1>
            <div className="jumbotron">
              <ul style={{ listStyle: "none", textAlign: "left" }}>
                <li> Name: {props?.user?.name}</li>
                <li> Email: {props?.user?.email}</li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <h1> My Orders</h1>
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>S.no</th>
                  <th>User</th>
                  <th>Order Date</th>
                  <th>Status</th>
                  <th>Products</th>
                  <th>Mode</th>
                  <th>Total</th>
                  <th>View</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="">
                {props.order?.length > 0 &&
                  props.order.map((each, index) => {
                    count++;
                    return (
                      <tr>
                        <td>{count}</td>
                        <td>{each.name}</td>
                        <td>{each.orderdate}</td>
                        <td>
                          {each.compeleted ? (
                            <button className="btn btn-success">
                              Completed
                            </button>
                          ) : (
                            <button className="btn ">Pending</button>
                          )}
                        </td>

                        <td>{each.cakes.length}</td>
                        <td>{each.mode}</td>
                        <td>
                          <b>{each.price}</b>
                        </td>
                        <td>
                          <Link to={`/checkout/order/${index}`}>
                            <button className="btn btn-info">View</button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default connect((state, props) => {
  return {
    address: state?.address,
    user: state?.user,
    order: state?.order,
  };
})(Profile);
