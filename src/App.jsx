import React, { useEffect, useState } from "react";
import { fetchQuestionsFromSheet } from "./utils/parseCSV";

const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT2ZjWx9kBQiJxLF5KSF6xvCLJpoMq8Z-WziKBk5aBcusMDBHitlDnDuAQs46MLFHPEAuL1WqtyesHO/pub?gid=0&single=true&output=csv";

function FlashcardApp() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetchQuestionsFromSheet(SHEET_CSV_URL).then(setQuestions);
  }, []);

  const next = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % questions.length);
  };

  if (!questions.length) return <p>Loading...</p>;

  const { question, answer, category } = questions[index];

  return (
    <div className="p-4 max-w-xl mx-auto shadow-md rounded bg-white">
      <h2 className="text-xl font-semibold mb-2">Category: {category}</h2>
      <div className="text-lg mb-4">{question}</div>
      {showAnswer ? (
        <div className="text-green-700 font-medium">{answer}</div>
      ) : (
        <button onClick={() => setShowAnswer(true)} className="text-blue-600 underline">Show Answer</button>
      )}
      <button onClick={next} className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded">Next</button>
    </div>
  );
}

export default FlashcardApp;
