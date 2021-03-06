import React, { useState, useEffect, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UI/Register.css";
import { emailRegrex } from "./constants/Regrex";
import Select from "react-select";
import axios from "axios";
import { BASE_URL } from "./constants/Base_url";

function Register(props) {
  const intialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthDate: "",
    mobile: "",
    gender: "",
    address: "",
    select: "",
  };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  let user = {
    first_name: formValues.first_name,
    last_name: formValues.last_name,
    email: formValues.email,
    mobile: formValues.mobile,
    gender: formValues.gender,
    password: formValues.password,
    confirm_password: formValues.confirm_password,
  };

  const submit = () => {
    console.log(user);
    let apiurl = BASE_URL + `api/auth/register`;
    axios({
      url: apiurl,
      method: "post",
      data: user,
    }).then(
      (response) => {
        // console.log(user);
        props.history.push("/login");
        console.log("response from signup API", response.data);
      },
      (error) => {
        console.log(user);
        console.log("error from signup API", error);
      }
    );
  };

  // select state
  const [selectedOption, set_selectedOption] = useState("");
  //input change handler
  const handleChange = (e, selectedOption) => {
    if (selectedOption) {
      set_selectedOption(selectedOption);
      var name = "select";
      var value = "mumbai";
    } else {
      var { name, value } = e.target;
    }
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  const options = [
    { value: "mumbai", label: "Mumbai", name: "Mumbai" },
    { value: "pune", label: "Pune", name: "Pune" },
    { value: "nagpur", label: "Nagpur", name: "Nagpur" },
  ];

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = emailRegrex;

    if (!values.first_name) {
      errors.first_name = "First Name cannot be blank";
    } else if (values.first_name.length < 2) {
      errors.first_name = "First Name must be more than 2 characters";
    }
    if (!values.last_name) {
      errors.last_name = "Last Name cannot be blank";
    } else if (values.last_name.length < 2) {
      errors.last_name = "Last Name must be more than 2 characters";
    }
    if (!values.email) {
      errors.email = "Email id is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid";
    }
    if (!values.password) {
      errors.password = "Password cannot be blank";
    } else if (values.password.length < 8) {
      errors.password = "Password length must be more than 8 characters";
    }
    if (!values.confirm_password) {
      errors.confirm_password = "Password cannot be blank";
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = "Please Enter Same Password";
    }
    // if (!values.birthDate) {
    //   var today = new Date();
    //   errors.birthDate = "Birth Date cannot be blank";
    // } else if (values.birthDate < today) {
    //   errors.birthDate = "InValid Birth Date";
    // }
    if (!values.mobile) {
      errors.mobile = "Phone Number cannot be blank";
    } else if (values.mobile.length < 10 || values.mobile.length > 10) {
      errors.mobile = "Only 10 Digit Mobile Number";
    }
    if (!values.gender) {
      errors.gender = "Please Select Gender";
    }
    // if (!values.address) {
    //   errors.address = "Address cannot be blank";
    // } else if (values.address.length < 2) {
    //   errors.address = "Address length must be more then 10 characters";
    // }
    // if (!values.select) {
    //   errors.select = "Select City";
    // }

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
      <center>
        <h2 className="card-title text-center">Sign Up</h2>
      </center>
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmitting && (
          <span className="success-msg">Form submitted successfully</span>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="first_name" className="col-sm-3 control-label">
              First Name*
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
              className="form-control"
              onChange={handleChange}
              autoFocus
            />
            {formErrors.first_name && (
              <span className="error">{formErrors.first_name}</span>
            )}
          </div>

          <label htmlFor="last_name" className="col-sm-3 control-label">
            Last Name*
          </label>
          <div className="form-group">
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              className="form-control"
              onChange={handleChange}
            />
            {formErrors.last_name && (
              <span className="error">{formErrors.last_name}</span>
            )}
          </div>
          <label htmlFor="email" className="col-sm-3 control-label">
            Email*{" "}
          </label>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="form-control"
              name="email"
              onChange={handleChange}
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>
          <label htmlFor="password" className="col-sm-3 control-label">
            Password*
          </label>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="form-control"
              onChange={handleChange}
            />
            {formErrors.password && (
              <span className="error">{formErrors.password}</span>
            )}
          </div>
          <label htmlFor="confirm_password" className="col-sm-3 control-label">
            Password*
          </label>
          <div className="form-group">
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm Password"
              className="form-control"
              onChange={handleChange}
            />
            {formErrors.confirm_password && (
              <span className="error">{formErrors.confirm_password}</span>
            )}
          </div>
          <label htmlFor="birthDate" className="col-sm-6 control-label">
            Date of Birth
          </label>
          <div className="form-group">
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              className="form-control"
              onChange={handleChange}
            />
            {formErrors.birthDate && (
              <span className="error">{formErrors.birthDate}</span>
            )}
          </div>
          <label htmlFor="mobile" className="col-sm-6 control-label">
            Phone number*{" "}
          </label>
          <div className="form-group">
            <input
              type="number"
              id="mobile"
              name="mobile"
              placeholder="Phone number"
              className="form-control"
              onChange={handleChange}
            />
            {formErrors.mobile && (
              <span className="error">{formErrors.mobile}</span>
            )}
          </div>

          <div className="form-group">
            <label className="control-label col-sm-3">Gender*</label>
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-6" onChange={handleChange}>
                <input type="radio" id="maleRadio" name="gender" value="male" />
                male &nbsp;&nbsp;&nbsp;
                <input
                  type="radio"
                  id="femaleRadio"
                  name="gender"
                  value="female"
                />
                female
              </div>
            </div>
            {formErrors.gender && (
              <span className="error">{formErrors.gender}</span>
            )}
          </div>

          <label htmlFor="address" className="col-sm-6 control-label">
            Address{" "}
          </label>
          <div className="form-group">
            <textarea
              type="address"
              id="address"
              name="address"
              placeholder="Address"
              className="form-control"
              onChange={handleChange}
            />
            {formErrors.address && (
              <span className="error">{formErrors.address}</span>
            )}
          </div>
          <label htmlFor="select" className="col-sm-6 control-label">
            Select City{" "}
          </label>
          <div className="form-group">
            <Select
              id="select"
              name="select"
              type="select"
              options={options}
              onInputChange={handleChange}
              onChange={handleChange}
            />
            {formErrors.select && (
              <span className="error">{formErrors.select}</span>
            )}
          </div>
          <div className="form-group">
            <div className="col-sm-9 col-sm-offset-3">
              <span className="help-block">*Required fields</span>
            </div>
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Register
          </button>
          <br></br>
          <div className="sign-up">
            <Link to="/login">Already Registered? Login Here</Link>
          </div>
          <br></br>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Register;
