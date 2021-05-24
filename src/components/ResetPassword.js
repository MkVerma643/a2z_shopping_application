import axios from "axios";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function ResetPassword(props) {
  let [message, setMessage] = useState({});
  let reset = function (e) {
    e.preventDefault();
    let email = e.target.elements.email.value;
    if (!validateEmail(email)) {
      setMessage({
        error: "Only Valid Email Please :(",
        success: null,
      });
    } else {
      axios({
        url: "https://neostore-api.herokuapp.com/api/auth/set-password",
        method: "post",
        data: { email: email },
      }).then(
        (response) => {
          console.log(response);
          if (response.data.message == "Password Sent to your email") {
            console.log("API HIT:", "Forgot Password");
            setMessage({
              success: "Password Sent to your email",
              error: null,
            });
            setTimeout(() => {
              props.history.push("/login");
            }, 2000);
          } else if (response.data.message == "No Such Email exists") {
            console.log("API HIT:", "Forgot Password");
            setMessage({
              error: "No user found with this Email",
              success: null,
            });
          } else {
            // console.log("asdsad");
            setMessage({
              error: "Something went Wrong",
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
    console.log(email);
  };
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <div>
      <Header />
      <center>
        <br />
        <br />
        <h3>Reset Password</h3>
        <br></br>
        <form style={{ width: "500px" }} onSubmit={reset}>
          <input
            id="email"
            type="text"
            className="form-control"
            name="email"
            placeholder="Enter Your Email"
          />
          <br />
          <p>
            Enter your email and you'll receive an email to reset your password
          </p>
          <br></br>
          <button className="form-control btn btn-primary">Reset Link</button>
          <br />
          <br />
          {message.success && (
            <span className="alert alert-success">{message.success}</span>
          )}
          {message.error && (
            <span className="alert alert-danger">{message.error}</span>
          )}
        </form>
      </center>
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
export default ResetPassword;
