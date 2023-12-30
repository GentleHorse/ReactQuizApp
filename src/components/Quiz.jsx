import { useState } from "react";

import QUESTIONS from "../questions.js";
import quizCompleteImage from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const selectAnswerHandler = (selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  };

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

  // Below codes only executed only when quizIsComplete === false
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div className="max-w-[50rem] m-auto p-8 bg-gradient-to-b from-[#3e2a6060] to-[#32106160] backdrop-blur-md rounded-lg shadow-dark-blue text-center">
      <div id="question">
        <h2 className="font-roboto text-2xl font-normal mt-2 mx-0 mb-10 text-[#bdabdd]">
          {QUESTIONS[activeQuestionIndex].text}
        </h2>
        <ul className="list-none m-0 p-0 flex flex-col items-center gap-2">
          {shuffledAnswers.map((answer) => (
            <li key={answer} id="answer" className="w-[90%] my-0 mx-auto">
              <button
                className="inline-block w-full font-roboto-condensed text-[0.9rem] py-4 px-8 border-none rounded-[24px] bg-[#6cb7f5] hover:bg-[#9d5af5] hover:text-purple-50 hover:shadow-yellow focus:bg-[#9d5af5] focus:text-purple-50 focus:shadow-yellow cursor-pointer"
                onClick={() => selectAnswerHandler(answer)}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
