import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import quizCompleteImage from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const selectAnswerHandler = useCallback(function selectAnswerHandler(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  },
  []);

  const skipAnswerHandler = useCallback(
    () => selectAnswerHandler(null),
    [selectAnswerHandler]
  );

  if (quizIsComplete) {
    return (
      <div
        id="summary"
        className="max-w-[40rem] m-auto p-8 bg-gradient-to-b from-[#3e2a6060] to-[#32106160] backdrop-blur-md rounded-lg shadow-black"
      >
        <img
          src={quizCompleteImage}
          alt="Trophy icon"
          className="block w-[16rem] h-[16rem] object-contain mb-4 mx-auto p-4"
        />
        <h2 className="font-roboto text-[3rem] text-center m-0 uppercase text-[#3a2353]">
          Quiz Completed
        </h2>
      </div>
    );
  }

  /**
   * Below codes executed
   * only when "quizIsComplete === false"
   */

  return (
    <div className="max-w-[50rem] m-auto p-8 bg-gradient-to-b from-[#3e2a6060] to-[#32106160] backdrop-blur-md rounded-lg shadow-dark-blue text-center">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={selectAnswerHandler}
        onSkipAnswer={skipAnswerHandler}
      />
    </div>
  );
}
