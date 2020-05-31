import React, { Component } from "react";
import classNames from "classnames";
import "./index.css";

class ToDoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ischeck: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ ischeck: e.target.checked });
  }

  render() {
    const { todoData } = this.props;
    const toDoListItem = classNames("toDoListItem", {
      done: this.state.ischeck,
    });

    return (
      <>
        <li className={toDoListItem}>
          <label>
            <input
              type="checkbox"
              checked={this.state.ischeck}
              onChange={this.handleChange}
            />
            <span>{todoData}</span>
          </label>
          <button
            style={{ display: this.state.ischeck ? "initial" : "none" }}
            onClick={() =>
              this.props.callDeleteItem(
                todoData,
                this.setState({ ischeck: false })
              )
            }
          >
            削除
          </button>
        </li>
      </>
    );
  }
}

export default ToDoListItem;
