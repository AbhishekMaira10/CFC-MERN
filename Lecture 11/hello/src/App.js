import './App.css';
import { useState } from "react";

function App() {

  let [expression, setExpression] = useState("");

  let numerics = new Set("0123456789");
  let operators = new Set("+-*/");

  let handleKeyUp = function(event){
    console.log(event.key);
    if(event.key === "Backspace"){
      setExpression(expression.slice(0, -1));
    }
    else if(numerics.has(event.key) || operators.has(event.key)){
    setExpression(expression + event.key);
    }
  }


  return (
    <div className="App" tabIndex={0} onKeyUp= {handleKeyUp} style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#999999"
    }}>

      <div style={{
        width: "400px",
        height: "200px",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "10px"
      }}>

        <h6>old</h6>
        <h1>{expression}</h1>

      </div>
    
    </div>
  );
}

export default App;
