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
    if (!e.target.elements["title"].value) {
      alert("タイトルを入力してください");
      return;
    }

    // 親に渡す値をセット
    const addData = {
      title: e.target.elements["title"].value,
      description: e.target.elements["description"].value,
    };

    // 親の処理を呼び出す
    return this.props.addItem(addData, this.initInput(e));
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
        <button type="submit">登録</button>
      </form>
    );
  }
}

export default ToDoAddForm;
