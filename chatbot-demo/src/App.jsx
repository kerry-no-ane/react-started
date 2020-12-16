import React from 'react';
import defaultDataset from './dataset'
import './assets/styles/style.css'
import {AnswersList, Chats} from './components'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers:[],
      chats:[],
      currentId: "init",
      dataset: defaultDataset,
      open: false      
    }
    this.selectAnswer = this.selectAnswer.bind(this)
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })
  
    this.setState({
      answers:this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId,
    })
  }


    // 回答が選択された時に呼ばれる関数
  selectAnswer = (selectedAnswer, nextQuestionId) => {
    if (nextQuestionId === 'init') {
      this.displayNextQuestion(nextQuestionId)
    } else {
      const chats = this.state.chats
      chats.push({
        text: selectedAnswer,
        type: 'answer'
      })
  
      this.setState({
        chats: chats
      })
      this.displayNextQuestion(nextQuestionId)
    }
  }

  // レンダリング後に初期化処理を実施
  componentDidMount() {
    this.selectAnswer("", this.state.currentId)
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
        </div>
      </section>
    );
  }
}

export default App;
