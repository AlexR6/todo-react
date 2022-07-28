import React, { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import "../../assets/login.scss";

const Index = () => {
  const [signinForm, setSigninForm] = useState(true);

  return (
    <>
      {signinForm ? (
        <Signin setSigninForm={setSigninForm} />
      ) : (
        <Signup setSigninForm={setSigninForm} />
      )}
    </>
  );
};

export default Index;
