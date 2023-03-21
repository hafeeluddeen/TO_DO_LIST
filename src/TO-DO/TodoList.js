import React from "react";
import { Fragment } from "react";
import ToDoItem from "./To-Do-Item/ToDoItem";
import Card from "../Components/UI/Card";

const TodoList = (props) => {
  const Dummy = props.todos.map((todo) => (
    <ToDoItem key={todo.id} activity={todo.activity} removeTodo = {props.removeTodo} id={todo.id} />
  ));

  return (
    <Card>
      <ul>{Dummy}</ul>
    </Card>
  );
};

export default TodoList;
