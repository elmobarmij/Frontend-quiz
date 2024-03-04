import { createContext, useContext } from "react";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  index: null,
  questionIndex: 0,
  currQuestion: 0,
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  currAnswer: null,
  allowNext: false,
  score: 0,
};

const QuizContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "activeQuiz":
      return {
        ...state,
        index: action.payload,
        questions: state.questions["quizzes"],
        status: "active",
      };
    case "newAnswer":
      return {
        ...state,
        currAnswer: action.payload,
      };
    case "increseScore":
      return {
        ...state,
        score: state.score + 1,
      };
    case "nextQuestion":
      return {
        ...state,
        allowNext: action.payload,
      };
    case "showNextQuestion":
      return {
        ...state,
        questionIndex: state.questionIndex++,
        currQuestion: state.currQuestion++,
        currAnswer: null,
        allowNext: false,
      };
    case "endQuiz":
      return { ...state, status: "finished" };
    case "restart":
      return {
        ...initialState,
        questions: action.payload,
        status: "ready",
      };
    default:
      throw new Error("Unknown action");
  }
}

function QuizProvider({ children }) {
  useEffect(function () {
    async function getData() {
      try {
        const res = await fetch("../../public/data.json");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    getData();
  }, []);

  const [
    {
      currQuestion,
      questions,
      status,
      index,
      currAnswer,
      allowNext,
      questionIndex,
      score,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider
      value={{
        currQuestion,
        questions,
        status,
        index,
        dispatch,
        currAnswer,
        allowNext,
        questionIndex,
        score,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === "undefined")
    throw new Error("QuizContext was used outside of QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
