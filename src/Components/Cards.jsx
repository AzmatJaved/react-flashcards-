import { useState } from "react";
import "./Cards.css";

const Cards = ({ questions }) => {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const handleClick = (nav) => {
    const navigation = Number(nav === "N" ? 1 : -1 );
    setShowAnswer(false);
    setIndex((prev) => (prev + navigation + questions.length) % questions.length);
  };
  const { question, answer, category } = questions[index];
  return (
    <div className="card-wrapper">
      <div className="card">
        <h2>Category : {category}</h2>
        <div className="question">{question}</div>
        <div style = {{padding : "10px"}}></div>
        {showAnswer ? (
          <div className="answer">{answer} </div>
        ) : (
          <button onClick={() => setShowAnswer(true)}>Show Answer</button>
        )}
        <button onClick={() => handleClick("N")}> Next</button>
        <button onClick={() => handleClick("P")}> Previous</button>
      </div>
    </div>
  );
};

export default Cards;
