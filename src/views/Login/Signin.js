import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../redux/reducers/auth.reducer";
import { signin } from "../../services/auth.services";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      return signin(email, password)
        .then((res) => {
          if (res.data.access_token) {
            window.localStorage.setItem("access_token", res.data.access_token);
            window.localStorage.setItem(
              "duration_access_token",
              Math.floor(Date.now() / 1000) + 3600
            );
            dispatch({ type: LOGIN });
          }
        })
        .catch((err) => {
          if (err.response.data.message) {
            setMessageError(err.response.data.message);
          }
        });
    } else {
      setMessageError("Vous devez remplir tous les champs");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="needs-validation">
      {messageError ? (
        <div className="alert alert-danger" role="alert">
          {messageError}
        </div>
      ) : (
        <></>
      )}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Mot de passe
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="•••••••••"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary">Se connecter</button>
      </div>
    </form>
  );
};

export default Signin;
