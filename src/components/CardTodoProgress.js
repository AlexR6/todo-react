import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionGetOneTodo,
  actionUpdateStatusTodo,
  actionUpdateTodo,
} from "../redux/actions/todoProgress.actions";
import {
  getCategories,
  getCategoryWhereId,
} from "../services/category.services";

const CardTodoProgress = (props) => {
  const todos = useSelector((state) => state.todoProgress);
  const { id, name, description, createdAt, categoryId } = { ...props };
  const [formIsActive, setFormIsActive] = useState(false);
  const [nameUpdate, setNameUpdate] = useState(name);
  const [descriptionUpdate, setDescriptionUpdate] = useState(description);
  const [categorySelected, setCategorySelected] = useState("");
  const categories = useSelector((state) => state.category);
  const [category, setCategory] = useState("");
  const dateCreatedAt = new Date(createdAt).toLocaleDateString("fr");
  const dispatch = useDispatch();

  const handleUpdateStatus = () => {
    actionUpdateStatusTodo(dispatch, id);
    actionGetOneTodo(dispatch, todos.length);
  };

  const handleUpdate = () => {
    actionUpdateTodo(
      nameUpdate,
      descriptionUpdate,
      id,
      setFormIsActive,
      dispatch
    );
  };

  useEffect(() => {
    if (categoryId) {
      getCategoryWhereId(categoryId).then((res) => {
        setCategorySelected(res.data);
        setCategory(res.data);
      });
    }
  }, []);

  return (
    <div className="card mb-4 card-main">
      {!formIsActive ? (
        <button className="btn-icon" onClick={() => setFormIsActive(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pencil-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
          </svg>
        </button>
      ) : (
        <></>
      )}
      <button className="no-btn" onClick={handleUpdateStatus}></button>
      {formIsActive ? (
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nom
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Mon super nom"
              onChange={(e) => setNameUpdate(e.target.value)}
              required
              value={nameUpdate}
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="name"
              placeholder="Ma super description"
              onChange={(e) => setDescriptionUpdate(e.target.value)}
              value={descriptionUpdate}
            />
          </div>
          <div className="text-center">
            <button
              className="btn-main mx-2"
              onClick={() => setFormIsActive(false)}
            >
              Annuler
            </button>
            <button className="btn-main mx-2" onClick={handleUpdate}>
              Modifier
            </button>
          </div>
        </div>
      ) : (
        <div className="card-body">
          <div className="row">
            <h5 className="card-title col-6 text-start">{name}</h5>
            <p className="card-subtitle mb-2 text-muted col-6 text-end">
              {dateCreatedAt}
            </p>
          </div>
          <p className="card-text">{description}</p>
          <p className="badge" style={{ backgroundColor: category.color }}>
            {category.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default CardTodoProgress;
