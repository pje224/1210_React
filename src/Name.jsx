import { useState } from "react";

function Name() {
  const [inputName, setInputName] = useState("");
  const [saveName, setSaveName] = useState("");
  function handleChange(e) {
    setInputName(e.target.value); // 입력값 저장
  }
  function handleSave() {
    setSaveName(inputName);
  }
  return (
    <div style={{ textAlign: "center" , marginTop: "30px"}}>
      <h1>이름 연결</h1>
      <input type="text" placeholder="이름을 입력..." onChange={handleChange} value={inputName} />
      <button onClick={handleSave}>저장</button>
      <p> {saveName && `안녕하세요, ${saveName}님`} </p>
    </div>
  );
}

export default Name;
