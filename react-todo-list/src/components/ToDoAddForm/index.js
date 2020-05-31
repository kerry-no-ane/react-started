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
    const addData = e.target.elements["todoText"].value;
    if (!addData) {
      alert("内容を入力してください");
    } else if (this.props.todoList.indexOf(addData) !== -1) {
      alert("その内容はすでに登録されています");
    } else {
      // 親の処理を呼び出す
      return this.props.addItem(addData, this.initInput(e));
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
