import { useEffect, useState } from "react";
import { fetchQuestionsFromSheet } from "./utils/parseCSV";
import Cards from "./Components/Cards";
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT2ZjWx9kBQiJxLF5KSF6xvCLJpoMq8Z-WziKBk5aBcusMDBHitlDnDuAQs46MLFHPEAuL1WqtyesHO/pub?gid=0&single=true&output=csv";

function FlashcardApp() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestionsFromSheet(SHEET_CSV_URL).then(setQuestions);
  }, []);

  if (!questions.length) return <p>Loading...</p>;

  return <Cards questions={questions} />;
}

export default FlashcardApp;
