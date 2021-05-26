import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "./UI/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";

function Header(props) {
  return (
    <nav className="header">
      {/* Logo on the Left */}
      <Link to="/">
        <img src={logo} className="header_logo" alt="Logo" />
      </Link>

      {/* Search Box in Middle */}
      <div className="header_search">
        <input type="text" className="headerSearchInput" />
        <SearchIcon className="headerSearchIcon" />
      </div>

      {/* 3links */}
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_option_line1">Hello,{props.user}</span>
            <span className="header_option_line2">SignIn</span>
          </div>
        </Link>

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
