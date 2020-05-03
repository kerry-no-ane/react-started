import React, { Component } from 'react'
import Faker from 'faker'
import LazyLoad from 'react-lazyload'    // react-lazyloadをインポート
  
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }
 
  // コンポーネントがマウントされた後、Faker.jsからテスト用画像を1000件作成する
  componentDidMount() {
    for (let i = 0; i < 1000; i++) {
      const user = {
        no: i,  // key用
        name: Faker.internet.userName(),    // alt用
        avatar: Faker.internet.avatar(),  // imgのパス
      }
      this.setState(prevState => ({
        users: [...prevState.users, user],
      }))
    }
  }
  
 // この処理が1000回呼ばれる
  renderUsers(user) {
    return (
      <div style={{ border: 'solid 1px #eee' }} key={user.no}>
        No.{user.no}
         {/* 遅延ロード対象をLazyLoadタグで囲む。
　　　　　　         throttleに対象が表示領域に表示されてから読み込み開始するまでの待ち時間を、widthとheightに画像サイズを指定する。（正確な計算のため）
                onceを指定すると、その対象の読み込みが完了したら監視を行わないようになる */}
        <LazyLoad throttle={200} width={100} height={100} once>
                <img src={user.avatar} alt={user.name} width="100" height="100" />
        </LazyLoad>
      </div>
    )
  }
  
  render() {
    // Fakerで作成したデータを出力する
    return <div>{this.state.users.map(user => this.renderUsers(user))}</div>
  }
}
  
export default App