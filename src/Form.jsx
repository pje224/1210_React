import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [result, setResult] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setResult(`이름 : ${name} , 이메일 : ${email}`);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>폼 전송</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="이메일" value={email} onChange={(e) => setemail(e.target.value)} />
        </div>
        <button type="submit">제출</button>
      </form>
      <p>{result}</p>
    </div>
  );
}
export default Form;
