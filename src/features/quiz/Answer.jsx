import { useQuiz } from "../../contexts/QuizContext";
import { useEffect } from "react";

import { convertIndexToLetter } from "../../utils/helpers";
import iconCorrect from "../../assets/iconCorrect.svg";
import iconIncorrect from "../../assets/iconIncorrect.svg";
import { useAnswer } from "../../contexts/AnswerContext";

const styles =
  "group cursor-pointer leading-[35px] select-none bg-white flex items-center dark:bg-navyDark dark:shadow-sm rounded-3xl py-3 px-8 md:py-6 md:px-10 gap-8 hover:outline outline-spacing-1 outline-[#a729f5] transition-all duration-150 justify-between";

const letterStyles =
  "rounded-xl md:rounded-[1.2rem] p-6 md:p-8 transition-all duration-300 text-3xl md:text-4xl lg:text-5xl font-medium";

function Answer({ option, answerIndex }) {
  const { isCorrectAnswer, isAnswerButton, setIsSelectedAnswer } = useAnswer();
  const { currAnswer, allowNext, dispatch } = useQuiz();

  const isCurrentSelectedAndCorrect =
    answerIndex === currAnswer && isCorrectAnswer;
  const rightAnswerButton = answerIndex === isAnswerButton;

  function handleClick() {
    setIsSelectedAnswer(true);
    dispatch({ type: "newAnswer", payload: answerIndex });
  }

  useEffect(
    function () {
      if (isCorrectAnswer)
        document.querySelector(".btn")?.classList.add("correct");
    },
    [isCorrectAnswer]
  );

  useEffect(
    function () {
      if (allowNext && !isCorrectAnswer)
        document.querySelector(".btn")?.classList.add("incorrect");
    },
    [allowNext, isCorrectAnswer]
  );

  return (
    <button
      className={
        answerIndex === currAnswer
          ? styles + " btn outline outline-spacing-1 outline-[#a729f5]"
          : styles
      }
      onClick={handleClick}
      disabled={allowNext}
    >
      <div className="flex items-center gap-8 sm:gap-10 md:gap-12">
        <span
          className={
            answerIndex === currAnswer
              ? letterStyles + " bg-[#a729f5] text-white"
              : letterStyles + " group-hover:bg-[#f6e7ff] bg-slate-200"
          }
        >
          {convertIndexToLetter(answerIndex)}
        </span>
        <strong className="text-[#303e50] flex text-left md:text-center text-[1.8rem] dark:text-white md:text-[2.4rem] lg:text-[2.8rem]">
          {option}
        </strong>
      </div>

      <div className="flex">
        {(isCurrentSelectedAndCorrect || rightAnswerButton) && (
          <img src={iconCorrect} alt="Icon Correct" />
        )}

        <img className="hidden" src={iconIncorrect} alt="Icon Incorrect" />
      </div>
    </button>
  );
}

export default Answer;
