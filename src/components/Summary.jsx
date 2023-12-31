import quizCompleteImage from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - (skippedAnswersShare + correctAnswersShare);

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
      <div className="flex gap-12 w-[60%] my-8 mx-auto pb-8 border-b-2 border-[#594276]">
        <p className="flex flex-col m-0">
          <span className="font-roboto-condensed text-5xl text-[#594276]">
            {skippedAnswersShare}%
          </span>
          <span className="font-roboto-condensed uppercase text-[0.8rem] text-[#30273a] mt-[0.7rem] mx-auto text-center tracking-widest">
            skipped
          </span>
        </p>
        <p className="flex flex-col m-0">
          <span className="font-roboto-condensed text-5xl text-[#594276]">
            {correctAnswersShare}%
          </span>
          <span className="font-roboto-condensed uppercase text-[0.8rem] text-[#30273a] mt-[0.7rem] mx-auto text-center tracking-widest">
            answered correctly
          </span>
        </p>
        <p className="flex flex-col m-0">
          <span className="font-roboto-condensed text-5xl text-[#594276]">
            {wrongAnswersShare}%
          </span>
          <span className="font-roboto-condensed uppercase text-[0.8rem] text-[#30273a] mt-[0.7rem] mx-auto text-center tracking-widest">
            answered incorrectly
          </span>
        </p>
      </div>
      <ol className="list-none my-8 mx-auto p-0 text-center">
        {userAnswers.map((answer, index) => {
          let cssClasses = "my-1 mx-0 font-roboto-condensed";

          if (answer === null) {
            cssClasses += " font-normal text-[#d1baf2]";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClasses += " font-bold text-[#054e37]";
          } else {
            cssClasses += " font-bold text-[#730b4b]";
          }

          return (
            <li key={index} className="my-8 mx-0">
              <h3 className="font-roboto-condensed text-[1rem] my-0 mx-auto flex justify-center items-center bg-[#2c203d] text-[#d8cde8] w-8 h-8 rounded-[50%]">
                {index + 1}
              </h3>
              <p className="my-1 mx-0 text-[1rem] text-[#30273a]">
                {QUESTIONS[index].text}
              </p>
              <p className={cssClasses}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}


