import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../redux/reducers/auth.reducer";
import { signin } from "../../services/auth.services";

const Signin = (props) => {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pseudo && password) {
      return signin(pseudo, password)
        .then((res) => {
          if (res.data.access_token) {
            window.localStorage.setItem("access_token", res.data.access_token);
            window.localStorage.setItem(
              "duration_access_token",
              Math.floor(Date.now() / 1000) + 3600
            );
            dispatch({ type: LOGIN });
            window.location.href = "/";
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
    <form onSubmit={handleSubmit} className="pt-5">
      <h3 className="mb-4">Connexion</h3>
      {messageError ? (
        <div className="alert alert-danger" role="alert">
          {messageError}
        </div>
      ) : (
        <></>
      )}
      <div className="mb-3">
        <label htmlFor="pseudo" className="form-label">
          Pseudo
        </label>
        <input
          type="pseudo"
          className="form-control"
          id="pseudo"
          placeholder="JeanX9"
          onChange={(e) => setPseudo(e.target.value)}
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
        />
      </div>
      <div className="text-center">
        <button className="btn-main mb-3">Se connecter</button>
        <p
          className="text-info"
          onClick={() => props.setSigninForm(false)}
          style={{ cursor: "pointer" }}
        >
          Je n'ai pas de compte
        </p>
      </div>
    </form>
  );
};

export default Signin;
