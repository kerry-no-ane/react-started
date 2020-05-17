import React, { Component } from "react";
import classNames from "classnames";
import "./ToDoListItem.css";

class ToDoListItem extends Component {
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
    const { title, deleteFunc } = this.props;
    const toDoListItem = classNames("toDoListItem", {
      done: this.state.ischeck,
    });

    return (
      <ul className="toDoList">
        <li className={toDoListItem}>
          <input type="checkbox" onClick={this.handleCheckChange} />
          <span>{title}</span>
          <button
            style={{ display: this.state.ischeck ? "initial" : "none" }}
            onClick={deleteFunc}
          >
            削除
          </button>
        </li>
      </ul>
    );
  }
}

export default ToDoListItem;
