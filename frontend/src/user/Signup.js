import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import "./sign.css"
import { signup } from "../auth/helper";

const Signup = () => {

  const [values,setValues]=useState({
    name:"",
    email:"",
    password:"",
    error:"",
    success:false
  });
  const{name,email,password,error,success}=values


  const handleChange=name=>event=>{
    setValues({...values,error:false,[name]:event.target.value})
  }

const onSubmit=event=>{
  event.preventDefault();
  setValues({...values,error:false})
  signup({name,email,password})
  .then(data=>{
    if(data.error){
      setValues({...values,error:data.error,success:false});

    }else{
      setValues({
        ...values,
        name:"",
        email:"",
        password:"",
        error:"",
        success:true
      })
    }
    console.log(values)
  })
  .catch(console.log("error"))
}

const successmessage=()=>{
  return(
    <div className="wrapper fadeInDown">
    <div id="formContent">
  <div className="alert alert-success"
  style={{display:success ? "":"none"}}>New Account was created successfully . please 
   {" "} 
  <Link className="text-danger"to ="/signin">  login Here</Link></div>
  </div>
  </div>
  )
}

const errormessage=()=>{
 return(
 <div className="wrapper fadeInDown">
 <div id="formContent">
   <div className="alert alert-danger"
  style={{display:error ? "":"none"}}>
    {error}
  </div>
   </div>
  </div>
   )
 
}
  const signUpForm = () => {
    return (
        <div className="wrapper fadeInDown">
        <div id="formContent">
    
    <div className="fadeIn first">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/009/184/686/small/sms-letter-logo-design-with-polygon-shape-sms-polygon-and-cube-shape-logo-design-sms-hexagon-logo-template-white-and-black-colors-sms-monogram-business-and-real-estate-logo-vector.jpg" id="icon" alt="User Icon" />

    </div>

    <form>
    <label className="text-secondary text-left">Enter Your Name</label>
    <input type="text" id="login" className="fadeIn second" name="login" value={name} onChange={handleChange("name")} />
    <label className="text-secondary">Enter Your E-mail</label>

        <input type="text" id="login" className="fadeIn second" name="login" value={email} onChange={handleChange("email")}/>
      
      <label className="text-secondary">Enter Your Password</label>

      <input type="password" id="password" className="fadeIn third" value={password}  name="login" onChange={handleChange("password")} />
      <input type="submit" onClick={onSubmit} className="fadeIn fourth" value="Log In"/>
    </form>
  </div>
</div>


    );
  };

  return (
    <Base title="Sign up page" description="A page for user to sign up!">
      {signUpForm()}
      {successmessage()}
      {errormessage()}
      {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
    </Base>
  );
};

export default Signup;
