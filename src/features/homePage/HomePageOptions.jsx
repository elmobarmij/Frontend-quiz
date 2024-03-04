import { useQuiz } from "../../contexts/QuizContext";

function HomePageOptions({ option, index }) {
  const { dispatch } = useQuiz();
  const { icon, alt, text } = option;

  return (
    <li
      className="cursor-pointer select-none dark:bg-navyDark dark:shadow-sm bg-white flex items-center rounded-3xl p-8 gap-8"
      onClick={() => dispatch({ type: "activeQuiz", payload: index })}
    >
      <img
        style={{
          backgroundColor: option.bg,
          borderRadius: ".4rem",
          padding: ".5rem",
        }}
        src={icon}
        alt={alt}
      />
      <strong className="flex justify-center dark:text-slate-200 font-medium text-[#303e50] items-center text-3xl md:text-[2.8rem]">
        {text}
      </strong>
    </li>
  );
}

export default HomePageOptions;
