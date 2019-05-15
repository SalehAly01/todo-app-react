import React, { Component } from "react";
import ToDoItem from "./Components/TodoItem";
import "./css/font-awesome.css";
import "./css/style.css";
import { getLocalStorageItem, removeLocalStorageItem, saveToLocalStorage } from "./utilities/localStorageActions.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [
        // { id: "12312", name: "play game", isDone: true }
      ]
    };
    this.completeTodo = this.completeTodo.bind(this);
  }

  componentDidMount() {
    let data = getLocalStorageItem("todos");
    if (data) {
      this.setState({ todos: data });
    }
  }

  addTodo = (e) => {
    e.preventDefault();
    if (this.state.todo) {
      let newTodo = {
        id: +new Date(),
        name: this.state.todo,
        isDone: false
      };
      let newList = [...this.state.todos, newTodo];
      this.setState({ todos: newList, todo: "" });
      saveToLocalStorage(newList);
    }
  };

  removeTodo = (id) => {
    let newList = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newList });
    saveToLocalStorage(newList);
  }

  completeTodo = (id) => {
    let newList = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    this.setState({ todos: newList });
    saveToLocalStorage(newList);
  }

  handleTodoInput = e => {
    this.setState({ todo: e.target.value });
  };

  clearTodos = () => {
    this.setState({ todos: [] });
    removeLocalStorageItem("todos");
  };

  render() {
    let todoItems;
    todoItems = this.state.todos.map(todo => {
      return (
        <ToDoItem
        key={todo.id}
        todo={todo}
        completeTodo={this.completeTodo}
        removeTodo ={this.removeTodo}
        />
      );
    });

    return (
      <main className="container">
        <header className="header">
          <div className="clear">
            <i
              className="fa fa-refresh"
              aria-hidden
              onClick={this.clearTodos}
            />
          </div>
          <div id="date" />
        </header>
        <section className="content">
          <ul id="list">{todoItems}</ul>
        </section>
        <form className="add-to-do" onSubmit={this.addTodo}>
          <i className="fa fa-plus-circle" aria-hidden />
          <input
            type="text"
            id="input"
            value={this.state.todo}
            placeholder="Add new Todo"
            onChange={this.handleTodoInput}
          />
        </form>
      </main>
    );
  }
}

export default App;
