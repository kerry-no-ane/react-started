import React, { Component } from "react";
import "./index.css";

class ToDoAddForm extends Component {
  constructor(props) {
    super(props);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(e) {
    // formのデフォルトのイベントをキャンセル
    e.preventDefault();
    if (!e.target.elements["todoText"].value) {
      alert("内容を入力してください");
    } else {
      // 親の処理を呼び出す
      return this.props.addItem(
        e.target.elements["todoText"].value,
        this.initInput(e)
      );
    }
  }

  // 入力エリアを初期化
  initInput(e) {
    e.target.elements["todoText"].value = "";
  }

  render() {
    return (
      <form className="add-form" onSubmit={(e) => this.handleAddItem(e)}>
        <input id="todoText" placeholder="内容" />
        <button type="submit">登録</button>
      </form>
    );
  }
}

export default ToDoAddForm;
