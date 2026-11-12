
import { useEffect, useState } from "react";

function App() {
  const [hello, setHello] = useState("");
  const [health, setHealth] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hello")
      .then((response) => response.json())
      .then((data) => setHello(data.message));

    fetch("http://127.0.0.1:8000/api/health")
      .then((response) => response.json())
      .then((data) => setHealth(data.status));
  }, []);

  return (
    <div>
      <h1>Deployment Demo</h1>

      <h2>Backend Message</h2>
      <p>{hello}</p>

      <h2>Backend Health</h2>
      <p>{health}</p>
    </div>
  );
}

export default App;
