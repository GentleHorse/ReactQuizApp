import { useState } from "react";

import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "../questions.js";

/**
 * @param {int} key activeQuestionIndex
 */

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  // Change progress bar dynamically
  let timer = 10000;
  let progressBarColor = "purple";

  if (answer.selectedAnswer) {
    timer = 1000;
    progressBarColor = "yellow";
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
    progressBarColor = "green";
  }

  // Handle answer select action
  const selectAnswerHandler = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  // Managing answer state
  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        color={progressBarColor}
      />
      <h2 className="font-roboto text-2xl font-normal mt-2 mx-0 mb-10 text-[#bdabdd]">
        {QUESTIONS[index].text}
      </h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={selectAnswerHandler}
      />
    </div>
  );
}
