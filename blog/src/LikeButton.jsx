import React, { useState, useEffect } from "react";

const LikeButton = () => {
  const [count, counter] = useState(0);
  const [limit, more] = useState(true);

  const countUp = () => {
    counter(count + 1);
  };

  useEffect(() => {
    document.getElementById("counter").addEventListener("click", countUp);

    return () => {
      document.getElementById("counter").removeEventListener("click", countUp);
    };
  }, [limit]);

  return (
    <>
      <button id="counter">いいね数：{count}</button>
      <button onClick={() => more(false)}>もっといいねする</button>
    </>
  );
};

export default LikeButton;

// // 初回だけ読み込み
// componentDidMount() {
//   // ボタンがクリックされたらカウント＋１
//   document.getElementById("counter").addEventListener("click", this.countUp);
// }
// // 再描画
// componentDidUpdate() {
//   // いいね数が10以上になったらカウントリセット
//   if (this.state.count >= 10) {
//     this.setState({ count: 0 });
//   }
// }
// // 開放
// componentWillUnmount() {
//   // ページが更新されたら開放
//   document.getElementById("counter").addEventListener("click", this.countUp);
// }

// countUp = () => {
//   this.setState({
//     count: this.state.count + 1,
//   });
// };
