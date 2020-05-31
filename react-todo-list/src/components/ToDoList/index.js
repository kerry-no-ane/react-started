import React, { Component } from "react";
import ToDoListItem from "../ToDoListItem";

class ToDoList extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <ul>
        {todoList.map((todo, index) => (
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
