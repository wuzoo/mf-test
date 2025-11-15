import "./App.css";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "white",
        }}
      >
        <p style={{ cursor: "pointer", padding: "10px", color: "black" }}>
          web1
        </p>
        <p style={{ cursor: "pointer", padding: "10px", color: "black" }}>
          web2
        </p>
      </div>
      <section
        style={{ backgroundColor: "red", width: "100%", height: "100%" }}
      >
        <p>this is section for micro apps</p>
      </section>
    </div>
  );
}

export default App;
