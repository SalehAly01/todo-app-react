import React from "react";

const ToDoItem = props => {
  return (
    <li className="item">
      <i
        className={`co fa ${
          props.todo.isDone ? "fa-check-circle" : "fa-circle-thin"
        }`}
        onClick={props.completeTodo}
        id={props.todo.id}
        job="complete"
      />
      <p className={`text ${props.todo.isDone ? "lineThrough" : ""}`}>
        {props.todo.name}
      </p>
      <i
        className="de fa fa-trash-o"
        onClick={() => props.removeTodo(props.todo.id)}
        id={props.todo.id}
        job="delete"
      />
    </li>
  );
};
export default ToDoItem;
