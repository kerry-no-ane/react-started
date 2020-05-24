import React, { Component } from "react";
import "./App.css";
import ToDoAddForm from "./components/ToDoAddForm";
import ToDoList from "./components/ToDoList";

class App extends Component {
  // ToDoListをローカルストレージから取得。初期値は []
  state = {
    todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  };
  // リスト追加
  handleAddItem = (addData) => {
    this.setState(
      {
        todoList: this.state.todoList.concat(addData),
      },
      // stateの変更後に入力した値をlocalstrageに保存する
      () => {
        this.todoSetStrage();
      }
    );
  };

  // リスト削除
  handleDeleteItem(todo) {
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
        <h1>
          ToDoリスト<button>リスト全削除</button>
        </h1>

        <ToDoAddForm
          addItem={(addData) => {
            this.handleAddItem(addData);
          }}
        />
        <ToDoList
          list={this.state.todoList}
          deleteItem={(todo) => this.handleDeleteItem(todo)}
        />
      </div>
    );
  }
}

export default App;
