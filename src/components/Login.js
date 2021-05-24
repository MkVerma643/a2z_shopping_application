import React, { useState, useEffect, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UI/Login.css";
import { emailRegrex } from "./constants/Regrex";
import axios from "axios";
import { connect } from "react-redux";
import { BASE_URL } from "./constants/Base_url";

function Login(props) {
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (props.isLoggedin) {
    props.history.push("/");
  }

  const submit = () => {
    console.log(formValues);
    let apiurl = BASE_URL + `api/auth/login`;
    axios({
      url: apiurl,
      method: "post",
      data: formValues,
    }).then(
      (response) => {
        console.log(formValues);
        console.log("response from Login API", response.data);
        props.dispatch({
          type: "LOGIN",
          payload: response.data,
        });
        props.history.push("/");
        // props.set(true);
        // props.userName(user.name);
        // console.log(apiurl);
      },
      (error) => {
        console.log(formValues);
        console.log("error from Login API", error);
        // console.log(apiurl);
      }
    );
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = emailRegrex;

    if (!values.email) {
      errors.email = "Email id is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid";
    }

    if (!values.password) {
      errors.password = "Password cannot be blank";
    } else if (values.password.length < 6) {
      errors.password = "Password length must be more than 6 characters";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <Fragment>
      <Header />
      <br></br>
      <center>
        <h2 className="card-title text-center">Login</h2>
      </center>
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmitting && (
          <span className="success-msg">Form submitted successfully</span>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Email id"
              className="form-control form-control-lg"
              autoFocus
            ></input>
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              className="form-control form-control-lg"
            ></input>
            {formErrors.password && (
              <span className="error">{formErrors.password}</span>
            )}
          </div>
          <Link to="/resetpassword">Forgot Password?</Link>
          <br></br>
          <br></br>
          <button className="btn btn-primary btn-block" type="submit">
            Login
          </button>
          <br></br>
          <div className="sign-up">
            <Link to="/signup">New User? SignUp Here</Link>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
}

export default connect()(Login);
