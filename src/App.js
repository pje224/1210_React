import { useState } from "react";

function App() {
  // 자바스크립트 코드작성
  const [emoji, setEmoji] = useState("👽");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 이모지 변경
  function changeEmoji() {
    setEmoji("😇");
  }
  function toggleEmoji() {
    setEmoji(emoji === "👽" ? "😇" : "👽");
  }

  // 숫자 변경
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  // 이름 입력
  function handleChange(e) {
    setName(e.target.value);
  }

  // return 안 : html 코드
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>박정은</h1>
      <p>지금 기분 : {emoji}</p>
      <button onClick={changeEmoji}>기분 변경</button>
      <button onClick={toggleEmoji}>기분 변경 토글</button>

      <p>지금 숫자 : {count}</p>
      <button onClick={increase}>숫자 올리기 +</button>
      <button onClick={decrease}>숫자 내리기 -</button>

      <h1 style={{ marginTop: "30px" }}>너의 이름 : </h1>
      <input type="text" placeholder="이름을 입력하기..." onChange={handleChange} value={name} />
      <p>
        안녕하세요, <strong>{name || "..."}님🐠</strong>
      </p>
    </div>
  );
}

export default App;
