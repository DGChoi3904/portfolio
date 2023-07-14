import React from "react";
function App() {
  const divStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  const h1Style = {
    color: "black",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
  };
  function handleClick() {
    h1Style.color = "red";
  }
  return (
    <div style={divStyle}>
      <h1>최대건의 포트폴리오(공사중)</h1>
      <h1>~오늘의 격언~</h1>
      <h2 style={h1Style} onClick={handleClick}>
        나는 신발이 없음을 한탄했는데,
        <br />
        길에서 발이 없는 사람을 만났다.
      </h2>
    </div>
  );
}
export default App;
