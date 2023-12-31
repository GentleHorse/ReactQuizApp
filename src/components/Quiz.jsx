import { useState, useCallback } from "react";
import useSound from "use-sound";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
import CongratulationSound from "../assets/congratulations.mp3";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const [playCongrtulationSound] = useSound(CongratulationSound);

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
    playCongrtulationSound();

    return <Summary userAnswers={userAnswers} />;
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
