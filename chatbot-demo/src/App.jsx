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
      open: false,
      loader: false
    }
    this.selectAnswer = this.selectAnswer.bind(this)
  }

  // 回答が選択された時に呼ばれる関数
  selectAnswer = (selectedAnswer, nextQuestionId) => {
    if (nextQuestionId === 'init') {
      this.displayNextQuestion(nextQuestionId)
    } else if(/^https:*/.test(nextQuestionId)) {
      const a = document.createElement('a');
      a.href = nextQuestionId;
      a.target = '_blank';
      a.click();
    } else {
      const chats = this.state.chats
      chats.push({
        text: selectedAnswer,
        type: 'answer'
      })
  
      this.setState({
        chats: chats
      })
      setTimeout(() => this.delayAnswer(nextQuestionId), 500)
    }
  }
  // 次の質問
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
      loader: false
    })
  }
  // 回答タイミングを遅らせることにより、チャット感を出す
  delayAnswer = (nextQuestionId) => {
    this.setState({loader: true})
    setTimeout(() => this.displayNextQuestion(nextQuestionId), 1500)
  }

  // レンダリング後に初期化処理を実施
  componentDidMount() {
    this.selectAnswer("", this.state.currentId)
  }
  componentDidUpdate() {
    const scrollArea = document.getElementById('scroll-area')
    if(scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} loader={this.state.loader}/>
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
        </div>
      </section>
    );
  }
}

export default App;
