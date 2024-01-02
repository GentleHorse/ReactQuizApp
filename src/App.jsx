import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";
import ThreeJsCanvas from "./components/ThreeJs/ThreeJsCanvas.jsx";

function App() {
  return (
    <>
      <ThreeJsCanvas />

      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
}

export default App;
