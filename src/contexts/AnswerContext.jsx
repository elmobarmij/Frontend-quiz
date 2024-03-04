import { createContext, useContext, useState } from "react";

const AnswerContext = createContext();

function AnswerProvider({ children }) {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [isSelectedAnswer, setIsSelectedAnswer] = useState(true);
  const [isAnswerButton, setIsAnswerButton] = useState("");

  return (
    <AnswerContext.Provider
      value={{
        isCorrectAnswer,
        setIsCorrectAnswer,
        isSelectedAnswer,
        setIsSelectedAnswer,
        isAnswerButton,
        setIsAnswerButton,
      }}
    >
      {children}
    </AnswerContext.Provider>
  );
}

function useAnswer() {
  const context = useContext(AnswerContext);
  if (context === "undefined")
    throw new Error("AnswerContext was used outside of AnswerProvider");
  return context;
}

export { AnswerProvider, useAnswer };
