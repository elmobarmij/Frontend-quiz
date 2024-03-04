import { useQuiz } from "../contexts/QuizContext";
import HomePage from "../features/homePage/HomePage";
import Quiz from "../features/quiz/Quiz";
import Summary from "../features/resultPage/Summary";
import Theme from "../features/theme/Theme";
import Error from "./Error";
import Header from "./Header";
import Logo from "./Logo";

function AppLayout() {
  const { status } = useQuiz();

  return (
    <div>
      <Header>
        <Logo />
        <Theme />
      </Header>
      {(status === "ready" || status === "loading") && <HomePage />}
      {status === "error" && <Error />}
      {status === "active" && <Quiz />}
      {status === "finished" && <Summary />}
    </div>
  );
}

export default AppLayout;
