import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/login.css"
const propTypes = {};
const defaultProps = { Task: "logIn" };

export default function Login(props) {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const isClassAdded = props.Task === "logIn" ? false : true;

  const toggleClass = () => {
    if(props.Task === "logIn") {
      navigate("/signup");
    }
    else {
      navigate("/login")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    let response;
    const url = "https://courseationbackend.vercel.app/api/auth";
    // console.log(credentials)
    if (props.Task === "logIn") {
      response = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })//will convert the object into type JSON
      });
    }
    else {
      response = await fetch(`${url}/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })//will convert the object into type JSON
      });
    }

    const json = await response.json();
    if (json.success) {
      props.showAlert("success", "Login Successful");
      //save the auth token and redirect
      localStorage.setItem('token', json.auth_token);
      navigate("/");
    }
    else {
      props.showAlert("danger", "Invalid Credentials");
      props.Task === "logIn" ? navigate("/login") : navigate("/createUser");
    }

  }

  return (
    <>
      {/* <!-- Main container --> */}
      <div className={isClassAdded ? `login-signup-container sign-up-mode` : `login-signup-container`}>

        {/* <!-- Forms Container --> */}
        <div className="forms-container">
          {/* <!-- Sign in / Sign up --> */}
          <div className="signin-signup">

            {/* <!-- Sign in form --> */}
            {/* <!-- Form required for sign in to the platform --> */}
            <form action={`${props.Task === "signup" ? "/createUser" : "/login"}`} method='post' className="sign-in-form formComponent" onSubmit={submitHandler}>
              <h2 className="title">Sign in</h2>

              {/* <!-- Input field for email --> */}
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" name='email' aria-describedby="emailHelp" placeholder="Email" value={credentials.email} onChange={onChange} />
              </div>

              {/* <!-- Input field for password --> */}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
              </div>

              {/* <!-- Login button --> */}
              <input type="submit" value="Login" className="loginPageButton solid" />
            </form>

            {/* <!-- Sign up form --> */}
            {/* <!-- Form required for sign up to the platform --> */}
            <form action={`${props.Task === "signup" ? "/createUser" : "/login"}`} method='post' className="sign-up-form formComponent" onSubmit={submitHandler}>
              <h2 className="title">Sign up</h2>

              {/* <!-- Input field for username --> */}
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Name" name='name' value={credentials.name} onChange={onChange} />
              </div>

              {/* <!-- Input field for email --> */}
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" name='email' aria-describedby="emailHelp" placeholder="Email" value={credentials.email} onChange={onChange} />
              </div>

              {/* <!-- Input field for password --> */}
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
              </div>

              {/* <!-- Sign up button --> */}
              <input type="submit" className="loginPageButton" value="Sign up" />
            </form>
          </div>
        </div>

        {/* <!-- Panels Container --> */}
        <div className="panels-container">

          {/* <!-- Left panel --> */}
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                No problem. You are just one step away from being a part of a superb family.
                Hit the below button.
              </p>
              <button className="loginPageButton transparent" id="sign-up-btn" onClick={toggleClass}>
                Sign up
              </button>
            </div>
            <img src="./images/log.svg" className="loginPageImage" alt="login_image" />
          </div>

          {/* <!-- Right panel --> */}
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Yayy!! We all are sailing on the same ship.
                Hit the below button.
              </p>
              <button className="loginPageButton transparent" id="sign-in-btn" onClick={toggleClass}>
                Sign in
              </button>
            </div>
            <img src="./images/register.svg" className="loginPageImage" alt="register_image" />
          </div>
        </div>
      </div>
    </>
  )
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
