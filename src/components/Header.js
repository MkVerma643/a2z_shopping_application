import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "./UI/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Header(props) {
  var [search, setSearch] = useState("");
  let searchq = (event) => {
    setSearch(event.target.value);
    // console.log("yeeee",event.target.value);
  };

  let logout = (event) => {
    props.dispatch({
      type: "LOGOUT",
    });
    props.dispatch({
      type: "CART",
      payload: null,
    });

    console.log(props);
  };

  return (
    <nav className="header">
      {/* Logo on the Left */}
      <Link to="/">
        <img src={logo} className="header_logo" alt="Logo" />
      </Link>

      {/* Search Box in Middle */}
      <div className="header_search">
        <input
          type="text"
          type="search"
          onChange={searchq}
          className="headerSearchInput"
        />
        <Link to={`/search?q=${search}`}>
          <SearchIcon className="headerSearchIcon" />
        </Link>
      </div>

      {/* 3links */}
      <div className="header_nav">
        {localStorage.email ? (
          <div>
            <div className="header_option">
              <span className="header_option_line2">
                <Link to="/profile">Hello,&nbsp;{localStorage.email}</Link>
              </span>
            </div>
            <div className="header_option">
              <Link to="/#">
                <span className="float-right" onClick={logout}>
                  Logout
                </span>
              </Link>
            </div>
          </div>
        ) : (
          <Link to="/login" className="header_link">
            <div className="header_option">
              <span className="header_option_line1">Hello,</span>
              <span className="header_option_line2">SignIn</span>
            </div>
          </Link>
        )}

        {/* <Link to="/orders" className="header_link">
          <div className="header_option">
            <span className="header_option_line1">Your</span>
            <span className="header_option_line2">Orders</span>
          </div>
        </Link> */}

        <Link to="/profile" className="header_link">
          <div className="header_option">
            <span className="header_option_line1">Your</span>
            <span className="header_option_line2">Profile</span>
          </div>
        </Link>

        {/* Basket Icon with number */}
        <Link to="/cart" className="header_link">
          <div className="header_optionBasket">
            <span className="header_option_line2">
              <ShoppingCartIcon /> 0
            </span>
          </div>
        </Link>

        {/*  */}
      </div>
    </nav>
  );
}

export default connect(function (state, props) {
  console.log("state initially", state);
  return {
    user: state?.user?.name,
    // loginstatus: state["isloggedin"],
  };
})(Header);
