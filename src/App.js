import { useEffect, useState } from "react";
import "@picocss/pico";
import "./App.css"
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
    <div className="container-fluid">
      <nav>
        <ul>
          <li>
            <h2>Memory Game</h2>
          </li>
        </ul>
        <ul>
          <li>
            <hgroup>
              <h2>Score: {score}</h2>
              <h2>Best: {bestScore}</h2>
            </hgroup>
          </li>
        </ul>
      </nav>
      <Board increaseScore={increaseScore} resetScore={resetScore} />
    </div>
  );
}

export default App;
