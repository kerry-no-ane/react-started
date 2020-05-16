import React, { Component } from "react";
import "./App.css";
import ToDoListItem from "./components/ToDoListItem.js";

class App extends Component {
  // ToDoListをローカルストレージから取得。初期値は []
  state = {
    todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  };

  // リスト追加
  handleAddItem = (e) => {
    // formのデフォルトのイベントをキャンセル
    e.preventDefault();

    // idがtitleのElementを取得
    const titleElement = e.target.elements["title"];
    // idがdescriptionのElementを取得
    const descriptionElement = e.target.elements["description"];

    // todoList stateに追加
    this.setState(
      {
        todoList: this.state.todoList.concat({
          title: titleElement.value,
          description: titleElement.value,
        }),
      },
      // stateの変更後に入力した値を空にする
      () => {
        this.todoSetStrage();
        titleElement.value = "";
        descriptionElement.value = "";
      }
    );
  };

  // リスト削除
  deleteItem(todo) {
    this.setState(
      {
        todoList: this.state.todoList.filter((x) => x !== todo),
      },
      // stateの変更後に入力した値を空にする
      () => {
        this.todoSetStrage();
      }
    );
  }

  // localStorageにtodoList stateを保存
  todoSetStrage = () => {
    localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
  };

  render() {
    return (
      <div className="app">
        <h1>ToDoリスト</h1>
        <form className="app-form" onSubmit={(e) => this.handleAddItem(e)}>
          <input id="title" placeholder="タイトル" />
          <textarea id="description" placeholder="詳細" />
          <button type="submit">登録</button>
        </form>

        {/* todoList配列の要素数分ToDoListItemコンポーネントを展開 */}
        {this.state.todoList.map((todo) => (
          <ToDoListItem
            key={todo.title}
            title={todo.title}
            description={todo.description}
            onClick={() => this.deleteItem(todo)}
          />
        ))}
      </div>
    );
  }
}

export default App;
