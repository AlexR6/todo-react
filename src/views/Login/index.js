import React, { useState } from "react";

import Signup from "./Signup";
import Signin from "./Signin";

const Index = () => {
  const [signinForm, setSigninForm] = useState(true);
  const [signinActive, setSigninActive] = useState(true);
  const [signupActive, setSignupActive] = useState(false);

  return (
    <div className="row">
      <ul className="col-2 list-group">
        <li
          onClick={(e) => {
            setSigninForm(true);
            setSigninActive(true);
            setSignupActive(false);
          }}
          className={
            signinActive ? "list-group-item active" : "list-group-item"
          }
        >
          Se connecter
        </li>
        <li
          onClick={(e) => {
            setSigninForm(false);
            setSigninActive(false);
            setSignupActive(true);
          }}
          className={
            signupActive ? "list-group-item active" : "list-group-item"
          }
        >
          S'inscrire
        </li>
      </ul>
      <div className="col-8">{signinForm ? <Signin /> : <Signup />}</div>
    </div>
  );
};

export default Index;
