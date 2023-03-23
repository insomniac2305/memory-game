import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increaseScore = () => setScore(score + 1);
  const resetScore = () => setScore(0);

  useEffect(() => {
    score > bestScore && setBestScore(score);
  }, [score, bestScore]);

  return (
    <div className="App">
      Score: {score}
      <br />
      Best: {bestScore}
      <Board increaseScore={increaseScore} resetScore={resetScore}/>
    </div>
  );
}

export default App;
