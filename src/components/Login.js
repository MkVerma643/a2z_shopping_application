import React, { Fragment } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // let getEmail = (event)=>{ 
    //     setUser({
    //         ...user,
    //             email : event.target.value
    //         }); 
    //         user.email=event.target.value; 
    //     }
       
    // let getPassword = (event)=>{ 
    //      setUser({
    //          ...user,
    //         password :  event.target.value
    //     }) 
    // }

    // let login =()=>{
    //     console.log(user)
    //    if(!user.email || !user.password){
    //     setMessage({
    //         error: "Enter Email And Password"
    //     }); 
    //    }
    //    else if (!validateEmail(user.email)){
    //     setMessage({
    //         error:  `A Valid Email Please`
    //     }); 
    //    }
    //    else{}

    return (
        <Fragment>
        <Header />
        <br></br>
        <div class="global-container" >
	        <div class="card login-form">
	        <div class="card-body">
            <center><h2 class="card-title text-center">Login</h2></center>
                <div className="container" style={{width:'50%'}}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control form-control-lg" onChange="{getEmail}"></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control form-control-lg" onChange="{getPassword}"></input> 
                    </div>
                    <div className="text-danger">
                        {console.error()}
                    </div>
                    <Link to="/resetpassword" >Forgot Password?</Link>
                    <br></br>
                    <br></br>
                    <button className="btn btn-primary btn-block" onClick="{login}">Login</button>
                    <br></br>
                    <div className="sign-up">
                        <Link to="/signup">New User? SignUp Here</Link>
                    </div>
                    <br></br>
                 </div>
                 </div>
                 </div>
                 </div>
        <Footer />
        </Fragment>
    )
}

export default Login