import { useQuiz } from "../../contexts/QuizContext";
import Button from "../../ui/Button";
import SummaryInfo from "./SummaryInfo";
import SummaryScore from "./SummaryScore";

function Summary() {
  const { dispatch } = useQuiz();

  function handleNewQuiz() {
    dispatch({ type: "restart" });
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <SummaryInfo />

      <div>
        <SummaryScore />
        <Button onClick={handleNewQuiz}>Play Again</Button>
      </div>
    </main>
  );
}

export default Summary;
