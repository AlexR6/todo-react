import React, { useState } from "react";
import { createCategory } from "../../services/category.services";
import { useDispatch } from "react-redux";
import { actionCreateCategory } from "../../redux/actions/category.actions";

const Index = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#3d3d3d");
  const [currentSelected, setCurrentSelected] = useState(null);
  const [messagesError, setMessagesError] = useState([]);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const dispatch = useDispatch();
  const arrColor = [
    "#C9CC41",
    "#66CC41",
    "#41CCA7",
    "#4181CC",
    "#41A2CC",
    "#CC8441",
    "#9741CC",
    "#CC4173",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    actionCreateCategory(
      dispatch,
      name,
      color,
      setMessageSuccess,
      setMessagesError
    );
    setName("");
    setColor("#3d3d3d");
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
          Couleur
        </label>
        <div className="d-flex gap-2 flex-wrap justify-content-center">
          {arrColor.map((item) => {
            return (
              <div
                className="div-color"
                style={{ backgroundColor: item }}
                key={item}
                onClick={(e) => {
                  if (currentSelected) {
                    currentSelected.classList.remove("active");
                  }
                  setCurrentSelected(e.target);
                  setColor(e.target.style.backgroundColor);
                  e.target.classList.add("active");
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="text-center">
        <button className="btn-main">Ajouter cette categorie</button>
      </div>
    </form>
  );
};

export default Index;
