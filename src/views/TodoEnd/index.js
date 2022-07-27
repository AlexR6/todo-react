import React, { useEffect, useState } from "react";
import CardTodoEnd from "../../components/CardTodoEnd";
import { useSelector, useDispatch } from "react-redux";
import {
  actionGetTodos,
  actionGetTodosScroll,
} from "../../redux/actions/todoEnd.actions";

const Index = () => {
  const todos = useSelector((state) => state.todoEnd);
  const [offset, setOffset] = useState(0);
  const [categorySelected, setCategorySelected] = useState("aucun");
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
    } else {
      window.addEventListener("scroll", loadMore);
      return () => window.removeEventListener("scroll", loadMore);
    }
  }, [offset, categorySelected]);
  return (
    <>
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
