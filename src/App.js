import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Orders from "./components/Orders";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Search from "./components/Search";
import ResetPassword from "./components/ResetPassword";
import { BASE_URL } from "./components/constants/Base_url";
import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import store from "./reduxstore/store";
import ProductDetails from "./components/ProductDetails";

function App(props) {
  if (localStorage.token && props.isLoggedin !== true) {
    axios({
      method: "get",
      url: BASE_URL + "getuserdetails",
      headers: {
        authtoken: localStorage.token,
      },
    }).then(
      (response) => {
        console.log("API HIT: User Details");
        if (response.data.data) {
          store.dispatch({
            type: "LOGIN_SUCCESS",
            payload: response.data.data,
          });
        } else {
          localStorage.removeItem("token");
        }
      },
      (error) => {
        localStorage.removeItem("token");
        console.log("get user details api. Error: ", error);
      }
    );
  }
  let [login, setlogin] = useState(false);
  let [name, setName] = useState("");

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/login"
            component={Login}
            checkLogin={login}
            set={setlogin}
          ></Route>
          <Route path="/logout" component={Cart}></Route>
          <Route path="/resetpassword" component={ResetPassword}></Route>
          <Route path="/signup" component={Register}></Route>
          <Route path="/product/:_id" component={ProductDetails}></Route>
          <Route path="/orders" component={Orders}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route exact path="/search" component={Search}></Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(function (state, props) {
  return {
    isLoggedin: state?.isLoggedin,
  };
})(App);
