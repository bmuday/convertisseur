import { useState } from "react";
import Input from "./components/Input";
import Results from "./components/Results";

function App() {
  const [weight, setWeight] = useState(0);
  return (
    <div id="app">
      <div id="container">
        <h1>Convertisseur de Masse</h1>
        <Input weight={weight} setWeight={setWeight} />
        <Results weight={weight} />
      </div>
    </div>
  );
}

export default App;
