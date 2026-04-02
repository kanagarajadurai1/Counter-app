import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Counter App</h1>
      <h2 style={{ fontSize: "80px" }}>{count}</h2>
      {count === 0 && <p style={{ color: "red" }}>Minimum limit reached</p>}
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)} disabled={count === 0}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;