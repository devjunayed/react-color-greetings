import React from "react";

const container = {
  backgroundColor: "skyblue",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const inner = {
  display: "block",
  backgroundColor: "violet",
  padding: "20px",
  borderRadius: "20px",
};

const hour = new Date().getHours();
let greet = " ";

let greetStyle = {};

if (hour >= 0 && hour <= 12) {
  greet = "Good morning";
  greetStyle.color = "green";
} else if (hour >= 13 && hour <= 19) {
  greet = "Good Afternoon";
  greetStyle.color = "orange";
} else if (hour >= 20 && hour <= 24) {
  greet = "Good Night";
  greetStyle.color = "black";
}

function App() {
  return (
    <>
      <div style={container}>
        <div style={inner}>
          <h1 style={{ color: "white" }}>
            Hello sir, <span style={greetStyle}>{greet}</span>
          </h1>
        </div>
      </div>
    </>
  );
}


export default App;