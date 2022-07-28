import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionUpdateStatusTodo,
  actionGetOneTodo,
  actionDeleteOneTodo,
} from "../redux/actions/todoEnd.actions";
import { getCategoryWhereId } from "../services/category.services";

const CardTodoEnd = (props) => {
  const todos = useSelector((state) => state.todoEnd);
  const { id, name, description, createdAt, endAt, categoryId } = { ...props };
  const dateCreatedAt = new Date(createdAt).toLocaleDateString("fr");
  const dateEndAt = new Date(endAt).toLocaleDateString("fr");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleUpdateStatus = () => {
    actionUpdateStatusTodo(dispatch, id);
    actionGetOneTodo(dispatch, todos.length);
  };

  const handleDelete = () => {
    actionDeleteOneTodo(dispatch, id);
    actionGetOneTodo(dispatch, todos.length);
  };

  useEffect(() => {
    if (categoryId) {
      getCategoryWhereId(categoryId).then((res) => setCategory(res.data));
    }
  }, []);

  return (
    <div className="card mb-4" style={{ borderColor: category.color }}>
      <div className="card-body">
        <div className="row">
          <h5 className="card-title col-6 text-start">{name}</h5>
          <p className="card-subtitle mb-2 text-muted col-6 text-end">
            {dateCreatedAt}
          </p>
        </div>
        <p className="mb-2">Todo terminée le : {dateEndAt}</p>
        <p className="card-text">{description}</p>
        <div className="text-center">
          <button className="btn btn-primary mx-2" onClick={handleUpdateStatus}>
            Je n'ai pas finis cette ToDo
          </button>
          <button className="btn btn-primary mx-2" onClick={handleDelete}>
            Supprimer cette ToDo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTodoEnd;
