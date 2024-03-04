import { useQuiz } from "../contexts/QuizContext";

const NUM_QUESTIONS = 10;

function ProgressBar() {
  const { score } = useQuiz();
  const progressWidth = `${(score / NUM_QUESTIONS) * 100}%`;

  return (
    <div className="w-[90%] mb-10 md:mb-20 md:mt-20 lg:mb-60 bg-white rounded-full h-3 dark:bg-navyDark">
      <div
        className="bg-[#a729f5] h-3 rounded-full"
        style={{ width: progressWidth }}
      ></div>
    </div>
  );
}

export default ProgressBar;
