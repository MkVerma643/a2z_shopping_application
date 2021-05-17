import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
        <Header />
        <br></br>
            <center><h1>Login</h1></center>
            <div >
                    <div className="form.group">
                        <label>Email</label>
                        <input type="email" className="" onChange="{getEmail}"></input>
                    </div>
                    <div className="">
                        <label>Password</label>
                        <input type="password" className="" onChange="{getPassword}"></input> 
                    </div>
                    <div className="">
                        {console.error()}
                    </div>
                    <div>
                        <Link to="/signup">New User? Click Here</Link>

                    </div>
                    
                    <button className="btn btn-secondary m-3" onClick="{login}">Login</button>
                    <br></br>
                    <Link to="/resetpassword" >Forgot Password?</Link>
                    <br></br>
                    <br></br>
                    <br></br>
                    </div>
        <Footer />
        </div>
    )
}

export default Login
