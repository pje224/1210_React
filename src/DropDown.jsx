import { useState } from "react";

function DropDown() {
  const [color, setColor] = useState("red");
  function handleChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className="content">
      <h1>좋아하는 색상</h1>
      <select onChange={handleChange} value={color}>
        {/* <select onChange={(e)=>setColor(e.target.value)}> */}
        <option value="red">빨강</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="yellow">노랑</option>
      </select>
      <p>
        선택한 색 : <strong style={{ backgroundColor: color, color: "white" }}>{color}</strong>
      </p>
    </div>
  );
}
export default DropDown;
