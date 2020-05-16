import React, { Component } from "react";
import "./ToDoListItem.css";

class ToDoListItem extends Component {
  render() {
    const { title, description, ...props } = this.props;

    return (
      <dl className="ToDoListItem" {...props}>
        <dt>{title}</dt>
        <dd>{description}</dd>
      </dl>
    );
  }
}

export default ToDoListItem;
