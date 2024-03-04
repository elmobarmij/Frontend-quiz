import HomePageOptions from "./HomePageOptions";
import { QuizInfo } from "./QuizInfo";
import { Options } from "./Options";
import { options } from "../../utils/helpers";
import { useEffect } from "react";
import { useQuiz } from "../../contexts/QuizContext";

function HomePage() {
  const { dispatch } = useQuiz();

  // This Effect is to Reset Questions in the home page after every new quiz
  useEffect(
    function () {
      async function getData() {
        try {
          const res = await fetch("../src/data/data.json");
          const data = await res.json();
          dispatch({ type: "dataReceived", payload: data });
        } catch (err) {
          dispatch({ type: "dataFailed" });
        }
      }
      getData();
    },
    [dispatch]
  );

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] lg:gap-10 mb-40 lg:mb-0">
      <QuizInfo />

      <Options>
        {options.map((option, i) => (
          <HomePageOptions option={option} key={option.id} index={i} />
        ))}
      </Options>
    </main>
  );
}

export default HomePage;
