import React, { useEffect, useState } from "react";
import CardTodoProgress from "../../components/CardTodoProgress";
import { useSelector, useDispatch } from "react-redux";
import {
  actionGetTodos,
  actionGetTodosScroll,
} from "../../redux/actions/todoProgress.actions";
import { getCategories } from "../../services/category.services";

const Index = () => {
  const todos = useSelector((state) => state.todoProgress);
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
      <div>
        Filtrer par :
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
            <CardTodoProgress
              key={todo._id}
              id={todo._id}
              name={todo.name}
              description={todo.description}
              createdAt={todo.createdAt}
            />
          );
        })
      ) : (
        <div>Vous n'avez aucune Todo en cours</div>
      )}
    </>
  );
};

export default Index;
