import Papa from "papaparse";

export async function fetchQuestionsFromSheet(csvUrl) {
  const response = await fetch(csvUrl);
  const csvText = await response.text();

  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data.map(row => ({
    category: row.Category,
    question: row.Question,
    answer: row.Answer
  }));
}
