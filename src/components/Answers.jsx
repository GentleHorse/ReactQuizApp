import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className="list-none m-0 p-0 flex flex-col items-center gap-2">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let buttonClasses =
          "inline-block w-full font-roboto-condensed text-[0.9rem] py-4 px-8 border-none rounded-[24px] cursor-pointer";

        if (answerState === "answered" && isSelected) {
          buttonClasses += " bg-[#f5a76c] text-[#2c203d]";
        } else if (answerState === "correct" && isSelected) {
          buttonClasses += " bg-[#5af59d] text-[#2c203d]";
        } else if (answerState === "wrong" && isSelected) {
          buttonClasses += " bg-[#f55a98] text-[#2c203d]";
        } else if (answerState !== "" && !isSelected) {
          buttonClasses += " bg-[#6cb7f5] text-[#9898ab]";
        } else {
          buttonClasses +=
            " bg-[#6cb7f5] hover:bg-[#9d5af5] hover:text-purple-50 hover:shadow-yellow focus:bg-[#9d5af5] focus:text-purple-50 focus:shadow-yellow";
        }

        return (
          <li key={answer} id="answer" className="w-[90%] my-0 mx-auto">
            <button
              className={buttonClasses}
              onClick={() => onSelect(answer)}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
