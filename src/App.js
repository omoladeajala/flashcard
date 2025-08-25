import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <FlashCard questions={questions} />
    </div>
  );
}

const questions = [
  {
    id: "3457",
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: "7336",
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: "8812",
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: "1297",
    question: "How to pass data from parent to child component?",
    answer: "Props",
  },
  {
    id: "2002",
    question:
      "What do we call an input element that is completely synchronized with the state of a React component?",
    answer: "Controlled component",
  },
];

function FlashCard({ questions }) {
  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>
        </div>
      ))}
    </div>
  );
}
