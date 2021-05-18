import React, { useState, useEffect, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UI/Register.css";
import { emailRegrex } from "./constants/Regrex";
import Select from "react-select";

function Register() {
  const [selectedOption, set_selectedOption] = useState("");

  const intialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: "",
    phoneNumber: "",
    gender: "",
    address: "",
    select: "",
  };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
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

    if (!values.firstName) {
      errors.firstName = "First Name cannot be blank";
    } else if (values.password.length < 2) {
      errors.password = "First Name must be more than 2 characters";
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

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  //   select handleChange
  function handleChangeSelect(_selectedOption) {
    set_selectedOption(_selectedOption);
    console.log(_selectedOption);
  }
  const options = [
    { value: "mumbai", label: "Mumbai" },
    { value: "pune", label: "Pune" },
    { value: "nagpur", label: "Nagpur" },
  ];
  //   gender changeValue
  function onChangeValue(event) {
    console.log(event.target.value);
  }

  return (
    <Fragment>
      <Header />
      <center>
        <h3 className="card-title text-center">Sign Up</h3>
      </center>
      <div className="container ">
        {Object.keys(formErrors).length === 0 && isSubmitting && (
          <span className="success-msg">Form submitted successfully</span>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="firstName" className="col-sm-3 control-label">
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="form-control"
              onChange={handleChange}
              autoFocus
            />
          </div>

          <label htmlFor="lastName" className="col-sm-3 control-label">
            Last Name*
          </label>
          <div className="form-group">
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <label htmlFor="email" className="col-sm-3 control-label">
            Email*{" "}
          </label>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="form-control"
              name="email"
              onChange={handleChange}
            />
          </div>
          <label htmlFor="password" className="col-sm-3 control-label">
            Password*
          </label>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <label htmlFor="birthDate" className="col-sm-6 control-label">
            Date of Birth*
          </label>
          <div className="form-group">
            <input
              type="date"
              id="birthDate"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <label htmlFor="phoneNumber" className="col-sm-6 control-label">
            Phone number*{" "}
          </label>
          <div className="form-group">
            <input
              type="phoneNumber"
              id="phoneNumber"
              placeholder="Phone number"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="control-label col-sm-3">Gender*</label>
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-6" onChange={onChangeValue}>
                <input type="radio" id="maleRadio" name="gender" value="Male" />
                Male &nbsp;&nbsp;&nbsp;
                <input
                  type="radio"
                  id="femaleRadio"
                  name="gender"
                  value="Female"
                />
                Female
              </div>
            </div>
          </div>

          <label htmlFor="address" className="col-sm-6 control-label">
            Address*{" "}
          </label>
          <div className="form-group">
            <textarea
              type="address"
              id="address"
              placeholder="Address"
              className="form-control"
            />
          </div>
          <label htmlFor="select" className="col-sm-6 control-label">
            Select City*{" "}
          </label>
          <div className="form-group">
            <Select
              name="select"
              value={selectedOption}
              options={options}
              onInputChange={handleChangeSelect}
              onChange={handleChangeSelect}
            />
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
        </form>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Register;
