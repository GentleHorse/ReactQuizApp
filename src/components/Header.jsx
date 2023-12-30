import logoImage from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="my-8 mx-0 text-center">
      <img
        className="mb-8 mx-auto w-[6rem] h-[6rem] drop-shadow-bottom-black"
        src={logoImage}
        alt="quiz logo"
      />
      <h1 className="m-0 p-1 font-roboto-condensed font-bold text-[3.5rem] tracking-[0.6rem] uppercase bg-gradient-to-r from-[#6a1a7a] to-[#76cafa]">
        React Quiz
      </h1>
    </header>
  );
}
