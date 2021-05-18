import React, { Fragment } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
    return (
        <Fragment>
        <Header />
            <center><h3 class="card-title text-center">Sign Up</h3></center>
                <div className="container " style={{width:'50%'}}>
                    <div className="form-group">
                    <label for="firstName" className="col-sm-3 control-label">First Name*</label>
                        <input type="text" id="firstName" placeholder="First Name" className="form-control" autofocus />
                    </div>
                
                    <label for="lastName" className="col-sm-3 control-label">Last Name*</label>
                    <div className="form-group">
                        <input type="text" id="lastName" placeholder="Last Name" className="form-control" autofocus />
                    </div>
                    <label for="email" className="col-sm-3 control-label">Email* </label>
                    <div className="form-group">
                    <input type="email" id="email" placeholder="Email" className="form-control" name= "email" />
                    </div>
                    <label for="password" className="col-sm-3 control-label">Password*</label>
                    <div className="form-group">
                        <input type="password" id="password" placeholder="Password" className="form-control" />
                    </div>
                    <label for="password" className="col-sm-6 control-label">Confirm Password*</label>
                    <div className="form-group">
                        <input type="password" id="password" placeholder="Password" className="form-control" />
                    </div>
                    <label for="birthDate" className="col-sm-3 control-label">Date of Birth*</label>
                    <div className="form-group">
                        <input type="date" id="birthDate" className="form-control" />
                    </div>
                    <label for="phoneNumber" className="col-sm-3 control-label">Phone number* </label>
                    <div className="form-group">
                        <input type="phoneNumber" id="phoneNumber" placeholder="Phone number" className="form-control" />
                    </div>
                
                <div className="form-group">
                    <label className="control-label col-sm-3">Gender*</label>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="radio-inline"> </label>
                                    <input type="radio" id="femaleRadio" value="Female" />Female
                               
                            </div>
                            <div className="col-sm-6">
                                <label className="radio-inline"></label>
                                    <input type="radio" id="maleRadio" value="Male" />Male 
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-9 col-sm-offset-3">
                        <span className="help-block">*Required fields</span>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Register</button>
                <br></br>
        </div>
         <Footer />
        </Fragment>
    )
}

export default Register
