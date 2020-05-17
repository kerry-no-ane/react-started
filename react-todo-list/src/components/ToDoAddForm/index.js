import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

const propTypes = {
  addItem: PropTypes.func,
};

class ToDoAddForm extends Component {
  constructor(props) {
    super(props);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(e) {
    // formのデフォルトのイベントをキャンセル
    e.preventDefault();

    // 親に渡す値をセット
    const todoData = {
      title: e.target.elements["title"].value,
      description: e.target.elements["description"].value,
    };

    // 親の処理を呼び出す
    return this.props.addItem(todoData, this.initInput(e));
  }

  // 入力エリアを初期化
  initInput(e) {
    e.target.elements["title"].value = "";
    e.target.elements["description"].value = "";
  }

  render() {
    return (
      <form className="add-form" onSubmit={(e) => this.handleAddItem(e)}>
        <input id="title" placeholder="タイトル" />
        <textarea id="description" placeholder="詳細" />
        <input type="submit" value="登録" />
      </form>
    );
  }
}

ToDoAddForm.propTypes = propTypes;
export default ToDoAddForm;
