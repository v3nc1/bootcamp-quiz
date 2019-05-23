import React, { useState } from "react";
import { quiz } from "./api/data";
import "./App.css";

const gameState = {
  currentQuestionIndex: 0,
  playerAnswer: undefined
};
export default function App() {
  //jsx

  const [state, setState] = useState(gameState);
  const question = quiz.questions[state.currentQuestionIndex];

  const playerAnswerSelected = playerAnswer => {
    const newState = {
      currentQuestionIndex: state.currentQuestionIndex,
      playerAnswer: playerAnswer
    };
    setState(newState);
  };

  return (
    <div className="App">
      <div>{question.text}</div>
      <div>
        <button onClick={() => playerAnswerSelected("A")}>
          {question.answers.A}
        </button>
        <button onClick={() => playerAnswerSelected("B")}>
          {question.answers.B}
        </button>
        <button onClick={() => playerAnswerSelected("C")}>
          {question.answers.C}
        </button>
        <button onClick={() => playerAnswerSelected("D")}>
          {question.answers.D}
        </button>
        <div>{question.answers[state.playerAnswer]}</div>
      </div>
    </div>
  );
}
