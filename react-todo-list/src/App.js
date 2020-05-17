import React, { Component } from "react";
import "./App.css";
import ToDoAddForm from "./components/ToDoAddForm";

class App extends Component {
  // ToDoListをローカルストレージから取得。初期値は []
  state = {
    todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  };
  // リスト追加
  handleAddItem = (todoData) => {
    this.setState(
      {
        todoList: this.state.todoList.concat({
          title: todoData.title,
          description: todoData.description,
        }),
      },
      // stateの変更後に入力した値をlocalstrageに保存する
      () => {
        // this.todoSetStrage();
      }
    );
  };

  // localStorageにtodoList stateを保存
  todoSetStrage = () => {
    localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
  };

  render() {
    return (
      <div className="app">
        <h1>ToDoリスト</h1>

        <ToDoAddForm
          addItem={(todoData) => {
            this.handleAddItem(todoData);
          }}
        />
      </div>
    );
  }
}

export default App;
