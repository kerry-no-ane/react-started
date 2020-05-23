import React, { Component } from "react";
import ToDoListItem from "../ToDoListItem";

class ToDoList extends Component {
  render() {
    const { list } = this.props;
    return (
      <ul>
        {list.map((todo, index) => (
          <ToDoListItem
            key={index}
            todoData={todo}
            callDeleteItem={(todo) => this.props.deleteItem(todo)}
          />
        ))}
      </ul>
    );
  }
}

export default ToDoList;
