import React, { Component } from "react";
import ToDoItem from "./Components/TodoItem";
import "./css/font-awesome.css";
import "./css/style.css";
import { connect } from "react-redux";
import { addTodo, removeTodo, toggleTodo, clearTodos } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

  addTodo = e => {
    e.preventDefault();
    if (this.state.todo) {
      this.props.newTodo(this.state.todo);
      this.setState({ todo: "" });
    }
  };

  removeTodo = id => {
    this.props.deleteTodo(id);
  };

  completeTodo = event => {
    const targetId = Number(event.target.id);
    this.props.toggleTodo(targetId);
  };

  handleTodoInput = e => {
    this.setState({ todo: e.target.value });
  };

  clearTodos = () => {
    this.props.clearTodos();
  };

  render() {
    let todoItems;
    todoItems = this.props.todos.map(todo => {
      return (
        <ToDoItem
          key={todo.id}
          todo={todo}
          completeTodo={this.completeTodo}
          removeTodo={this.removeTodo}
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

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  newTodo: name => dispatch(addTodo(name)),
  deleteTodo: id => dispatch(removeTodo(id)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  clearTodos: () => dispatch(clearTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
