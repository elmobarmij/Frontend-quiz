import { useQuiz } from "../../contexts/QuizContext";
import { Options } from "../homePage/Options";
import Answer from "./Answer";
import Button from "../../ui/Button";
import Warning from "../../ui/Warning";
import ProgressBar from "../../ui/ProgressBar";
import Question from "./Question";
import { useAnswer } from "../../contexts/AnswerContext";

function Quiz() {
  const {
    currQuestion,
    questions,
    index,
    currAnswer,
    allowNext,
    questionIndex,
    dispatch,
  } = useQuiz();

  const {
    setIsSelectedAnswer,
    setIsAnswerButton,
    setIsCorrectAnswer,
    isSelectedAnswer,
  } = useAnswer();

  const pickedOption = questions.at(index);
  const options = pickedOption.questions[questionIndex].options;
  const correctAnswer = pickedOption.questions[questionIndex].answer;
  const currAnswerToStr =
    pickedOption.questions[questionIndex].options[currAnswer];
  const numQuestions = pickedOption.questions.length;
  const correct = correctAnswer === currAnswerToStr;
  const correctAnswerIndex = options.indexOf(correctAnswer);
  const isLastQuestion = currQuestion === numQuestions - 1;

  function handleClick() {
    if (currAnswer !== null) {
      setIsSelectedAnswer(true);
      setIsAnswerButton(correctAnswerIndex);
      dispatch({ type: "nextQuestion", payload: true });

      if (correct) {
        setIsCorrectAnswer(true);
        dispatch({ type: "increseScore" });
      } else {
        setIsCorrectAnswer(null);
      }
    } else {
      setIsSelectedAnswer(false);
    }
  }

  function handleNext() {
    setIsCorrectAnswer(null);
    setIsSelectedAnswer(true);
    setIsAnswerButton("");

    if (isLastQuestion) {
      dispatch({ type: "endQuiz" });
    }

    dispatch({ type: "showNextQuestion" });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-30 md:pb-40 lg:pb-60">
      <div className="flex flex-col justify-between">
        <Question numQuestions={numQuestions} />
        <ProgressBar />
      </div>

      <div>
        <Options>
          {options.map((option, i) => (
            <Answer option={option} key={i} answerIndex={i} />
          ))}
        </Options>

        <div>
          {!allowNext && (
            <Button className="leading-5" onClick={handleClick}>
              Submit Answer
            </Button>
          )}

          {allowNext && (
            <Button className="leading-5" onClick={handleNext}>
              {`${isLastQuestion ? "Submit Quiz" : "Next Question"}`}
            </Button>
          )}

          {!isSelectedAnswer && <Warning />}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
