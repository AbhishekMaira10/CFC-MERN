import './App.css';

function App() {
  return (
    <div className="App" style={{
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
        justifyContent: "center"
      }}>

        <h6>old</h6>
        <h1>new</h1>

      </div>
    
    </div>
  );
}

export default App;
