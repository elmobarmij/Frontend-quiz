import { AnswerProvider } from "./contexts/AnswerContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { QuizProvider } from "./contexts/QuizContext";

import AppLayout from "./ui/AppLayout";
import Container from "./ui/Container";

export default function App() {
  return (
    <DarkModeProvider>
      <AnswerProvider>
        <QuizProvider>
          <Container>
            <AppLayout />
          </Container>
        </QuizProvider>
      </AnswerProvider>
    </DarkModeProvider>
  );
}
