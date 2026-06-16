import { useState } from "react";
import QuizQuestion from "./quiz-question";
import { quizzesData } from "./quizzes-config";
import { subjectsConfig, type Subject } from "./subjects-config";
import QuizResults from "./quiz-results";

type QuizProps = {
  subject: Subject;
  onPlayAgain: () => void;
};

export default function Quiz({ subject, onPlayAgain }: QuizProps) {
  const quiz = quizzesData[subject];
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const onNextQuestion = () => {
    if (currentQuestion === quiz.questions.length - 1) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    }
  };

  const onSubmitAnswer = () => {
    setIsAnswerSubmitted(true);
    if (selectedAnswer === null) return;
    const selectedAnswerText =
      quiz.questions[currentQuestion].options[selectedAnswer];
    const questionAnswer = quiz.questions[currentQuestion].answer;
    if (selectedAnswerText === questionAnswer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const actionLabel = isAnswerSubmitted ? "Next Question" : "Submit Answer";
  const handleAction = isAnswerSubmitted ? onNextQuestion : onSubmitAnswer;

  const onSelectAnswer = (optionIndex: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(optionIndex);
  };

  return (
    <>
      {!isQuizFinished ? (
        <QuizQuestion
          questionNumber={currentQuestion}
          totalQuestions={quiz.questions.length}
          question={quiz.questions[currentQuestion].question}
          options={quiz.questions[currentQuestion].options}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={onSelectAnswer}
          correctAnswer={quiz.questions[currentQuestion].answer}
          handleAction={handleAction}
          mainColor={subjectsConfig[subject].mainColor}
          actionLabel={actionLabel}
          isAnswerSubmitted={isAnswerSubmitted}
        />
      ) : (
        <QuizResults
          score={score}
          totalQuestions={quiz.questions.length}
          selectedSubject={subject}
          onPlayAgain={onPlayAgain}
        />
      )}
    </>
  );
}
