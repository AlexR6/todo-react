import React, { useState } from "react";
import { createCategory } from "../../services/category.services";
import { useDispatch } from "react-redux";

const Index = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#000000");
  const [messagesError, setMessagesError] = useState([]);
  const [messageSuccess, setMessageSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(color);
    createCategory(name, color)
      .then((res) => {
        setMessagesError([]);
        setMessageSuccess(true);
        setName("");
        setColor("#000000");
      })
      .catch((err) => {
        if (err.response.data.message) {
          setMessagesError(err.response.data.message);
          setMessageSuccess(false);
        }
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      {messagesError &&
        messagesError.map((message) => {
          return (
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          );
        })}
      {messageSuccess && (
        <div className="alert alert-success" role="alert">
          Categorie ajouté avec succès
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Mon super nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="color" className="form-label">
          Je choisis une couleur
        </label>
        <input
          type="color"
          id="color"
          className="mx-4"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary">Ajouter cette categorie</button>
      </div>
    </form>
  );
};

export default Index;
