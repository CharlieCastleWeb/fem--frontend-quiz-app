import { useState } from "react";
import QuizQuestion from "./quiz-question";
import { quizzesData } from "./quizzes-config";
import { subjectsConfig, type Subject } from "./subjects-config";

type QuizProps = {
  subject: Subject;
};

export default function Quiz({ subject }: QuizProps) {
  const quiz = quizzesData[subject];
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  return (
    <>
      {!isQuizFinished ? (
        <QuizQuestion
          questionNumber={currentQuestion}
          totalQuestions={10}
          question={quiz?.questions[currentQuestion].question}
          options={quiz?.questions[currentQuestion].options}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={setSelectedAnswer}
          mainColor={subjectsConfig[subject].mainColor}
        />
      ) : (
        <p>finished</p>
      )}
    </>
  );
}
