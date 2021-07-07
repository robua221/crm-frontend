import React, { useState } from "react";
import "./Entry.style.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { LoginForm } from "../../components/login/Login.comp";
import { PasswordReset } from "../../components/PasswordReset/PasswordReset.comp";

export const Entry = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [formload, setformload] = useState("login");


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setemail(value);

        break;

      case "password":
        setpassword(value);
        break;
      default:
        break;
    }
  }
  ;
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
     return alert("enter email and password !");
    }
    
    //Todo api to submit the form
    console.log(email,password)
  };

  const formswitcher=(formtype)=>{
setformload(formtype);
  }
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
     return alert("Enter email!");
    }
    console.log(email,password)
  };
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {formload==="login" &&  <LoginForm
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          formswitcher={formswitcher}
          email={email}
          password={password}
        /> }
       {formload==="reset" &&   <PasswordReset
          handleOnChange={handleOnChange}
          handleOnResetSubmit={handleOnResetSubmit}
          formswitcher={formswitcher}
          email={email}
         
           
        /> }
        
      </Jumbotron>
    </div>
  );
};
