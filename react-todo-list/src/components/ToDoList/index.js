import React, { Component } from "react";
import classNames from "classnames";
import "./index.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ischeck: false,
    };
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleCheckChange(e) {
    this.setState({ ischeck: e.target.checked });
  }

  render() {
    const { list } = this.props;
    const toDoListItem = classNames({
      done: this.state.ischeck,
    });

    return (
      <ul className="toDoList">
        {list.map((todo, index) => (
          <li key={index} className={toDoListItem}>
            <input type="checkbox" onClick={this.handleCheckChange} />
            <span>{todo.title}</span>
            <button
              style={{ display: this.state.ischeck ? "initial" : "none" }}
              onClick={() => this.props.deleteItem(todo)}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ToDoList;
