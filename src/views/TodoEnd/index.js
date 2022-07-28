import React, { useEffect, useState } from "react";
import CardTodoEnd from "../../components/CardTodoEnd";
import { useSelector, useDispatch } from "react-redux";
import {
  actionGetTodos,
  actionGetTodosScroll,
} from "../../redux/actions/todoEnd.actions";
import { getCategories } from "../../services/category.services";

const Index = () => {
  const todos = useSelector((state) => state.todoEnd);
  const [offset, setOffset] = useState(0);
  const [categorySelected, setCategorySelected] = useState("aucun");
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      actionGetTodosScroll(dispatch, offset, setOffset, 10, categorySelected);
    }
  };

  useEffect(() => {
    if (offset == 0) {
      actionGetTodos(dispatch, offset, setOffset, categorySelected);
      getCategories().then((res) => setCategories(res.data));
    } else {
      window.addEventListener("scroll", loadMore);
      return () => window.removeEventListener("scroll", loadMore);
    }
  }, [offset]);
  return (
    <>
      <div className="mb-4">
        Filtrer par categorie :
        <span
          style={{ background: "rgba(0, 0, 0, 0.175)", cursor: "pointer" }}
          className="badge mx-1"
          onClick={() => {
            setCategorySelected("aucun");
            setOffset(0);
          }}
          key={"aucun"}
        >
          Sans filtre
        </span>
        {categories[0] ? (
          categories.map((category) => {
            return (
              <span
                style={{ background: category.color, cursor: "pointer" }}
                className="badge mx-1"
                onClick={() => {
                  setCategorySelected(category._id);
                  setOffset(0);
                }}
                key={category._id}
              >
                {category.name}
              </span>
            );
          })
        ) : (
          <></>
        )}
      </div>
      {todos[0] ? (
        todos.map((todo) => {
          return (
            <CardTodoEnd
              key={todo._id}
              id={todo._id}
              name={todo.name}
              description={todo.description}
              createdAt={todo.createdAt}
              endAt={todo.endAt}
              categoryId={todo.categoryId}
            />
          );
        })
      ) : (
        <div>Vous n'avez aucune Todo terminé</div>
      )}
    </>
  );
};

export default Index;
