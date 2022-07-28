import React, { useState, useEffect } from "react";
import { createTodo } from "../../services/todo.services";
import { useSelector } from "react-redux";

const Index = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [messagesError, setMessagesError] = useState([]);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const categories = useSelector((state) => state.category);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(name, description, categorySelected)
      .then((res) => {
        setMessagesError([]);
        setMessageSuccess(true);
        setName("");
        setDescription("");
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
          ToDo ajouté avec succès
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
        <label htmlFor="description" className="form-label">
          Categorie
        </label>
        <select
          className="form-select"
          onChange={(e) => setCategorySelected(e.target.value)}
        >
          <option value="" key="">
            Aucune
          </option>
          {categories.map((category) => {
            return (
              <option value={category._id} key={category._id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          type="text"
          className="form-control"
          id="description"
          placeholder="Ma super description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button className="btn-main">Ajouter cette Todo</button>
      </div>
    </form>
  );
};

export default Index;
