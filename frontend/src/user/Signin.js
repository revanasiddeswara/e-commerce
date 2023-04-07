import React, { useState } from "react";
import Base from "../core/Base";
import {  Redirect } from "react-router-dom";

import { signin, authenticate, isAuthenticated } from "../auth/helper";
import "./sign.css"
const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
   
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect=()=>{
    if(didRedirect){
      if(user && user.role===1){
        return <Redirect to="/admin/dashboard"/>
      }else{
        return  <Redirect to="/user/dashboard"/>
      }
    }
    if(isAuthenticated()){
      return<Redirect to="/"/>
    }
  }



  const loadingMessage = () => {
    return (
    loading && (
      <div className="alert alert-info">
        <h2>Loading.....</h2>
      </div>
    )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  const signInForm = () => {
    return (
        <div className="wrapper fadeInDown">
        <div id="formContent">
          
          <div className="fadeIn first">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/009/184/686/small/sms-letter-logo-design-with-polygon-shape-sms-polygon-and-cube-shape-logo-design-sms-hexagon-logo-template-white-and-black-colors-sms-monogram-business-and-real-estate-logo-vector.jpg" id="icon" alt="User Icon" />
          </div>
      
          
          <form>
          <label className="text-secondary">Enter Your E-mail</label>
            <input type="text" id="login" className="fadeIn second" onChange={handleChange("email")}
                value={email} name="login" />
          <label className="text-secondary">Enter Your password</label>
            <input type="password" id="password" onChange={handleChange("password")}
                value={password} className="fadeIn third" name="login"/>
            <input type="submit" onClick={onSubmit} className="fadeIn fourth" value="Log In"/>
          </form>
      
         
          {/* <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div> */}
      
        </div>
      </div>
      
      
    );
  };

  return (
    <Base title="Sign In page" description="A page for user to sign in!">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}

    </Base>
  );
};

export default Signin;
