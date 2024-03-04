import { useQuiz } from "../../contexts/QuizContext";
import { convertIndexToLogo } from "../../utils/helpers";

function SummaryScore() {
  const { index, score, questions } = useQuiz();
  const summaryNumQuestions = questions.at(index).questions.length;
  const chosenOptionObj = convertIndexToLogo(index);

  return (
    <li className="select-none flex flex-col items-center rounded-3xl px-10 py-20 gap-8 bg-white dark:bg-navyDark/100">
      <div className="flex gap-8 md:gap-10 mb-10">
        <img
          style={{
            backgroundColor: chosenOptionObj.bg,
            borderRadius: ".4rem",
            padding: ".5rem",
          }}
          src={chosenOptionObj.icon}
          alt={chosenOptionObj.alt}
        />
        <strong className="flex justify-center font-medium items-center text-[2rem] dark:text-white md:text-[2.8rem]">
          {chosenOptionObj.text}
        </strong>
      </div>

      <strong className="text-[#303e50] dark:text-white font-medium text-[8rem] md:text-[12rem] md:mb-10 leading-none">
        {score}
      </strong>
      <span className="text-[#303e50] dark:text-[#6b7280] text-3xl md:text-4xl">
        Out of {summaryNumQuestions}
      </span>
    </li>
  );
}

export default SummaryScore;
