import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../redux/reducers/auth.reducer";
import { signin, signup } from "../../services/auth.services";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && checkPassword) {
      if (password == checkPassword) {
        return signup(email, password)
          .then((res) => {
            if (res.data.access_token) {
              window.localStorage.setItem(
                "access_token",
                res.data.access_token
              );
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
        setMessageError("Les mots de passe ne corresponde pas");
      }
    } else {
      setMessageError("Vous devez remplir tous les champs");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
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
      <div className="mb-3">
        <label htmlFor="check-password" className="form-label">
          Vérification du mot de passe
        </label>
        <input
          type="password"
          className="form-control"
          id="check-password"
          placeholder="•••••••••"
          onChange={(e) => setCheckPassword(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary">Crée mon compte</button>
      </div>
    </form>
  );
};

export default Signup;
