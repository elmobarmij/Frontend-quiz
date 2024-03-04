import { useQuiz } from "../../contexts/QuizContext";

function Question({ numQuestions }) {
  const { currQuestion, questions, index } = useQuiz();

  return (
    <div>
      <p className="text-[2rem] font-normal dark:text-[#626c7e] leading-none italic mb-12">
        Question {currQuestion + 1} of {numQuestions}
      </p>
      <p className="text-[2.4rem] md:mb-0 mb-10 md:text-[3.4rem] dark:text-white leading-none font-medium">
        {questions.at(index).questions.at(currQuestion).question}
      </p>
    </div>
  );
}

export default Question;
