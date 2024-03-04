import { useQuiz } from "../contexts/QuizContext";
import { convertIndexToLogo } from "../utils/helpers";

function Logo() {
  const { status, index } = useQuiz();
  const chosenOptionObj = convertIndexToLogo(index);

  return (
    <div>
      {(status === "active" || status === "finished") && (
        <li className="select-none flex items-center rounded-3xl lg:pb-8 gap-8">
          <img
            style={{
              backgroundColor: chosenOptionObj.bg,
              borderRadius: ".4rem",
              padding: ".5rem",
            }}
            src={chosenOptionObj.icon}
            alt={chosenOptionObj.alt}
          />
          <strong className="flex justify-center items-center text-[2rem] dark:text-white md:text-[2.8rem]">
            {chosenOptionObj.text}
          </strong>
        </li>
      )}
    </div>
  );
}

export default Logo;
