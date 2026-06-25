import { useEffect, useRef } from "react";
import QuizQuestionRadio from "./quiz-question-radio";

export type QuizQuestionProps = {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  options: string[];
  selectedAnswer: number | null;
  onSelectAnswer: (optionIndex: number) => void;
  handleAction: () => void;
  mainColor: string;
  actionLabel: string;
  isAnswerSubmitted: boolean;
  correctAnswer: string;
  answerStatusMessage: string;
};

export default function QuizQuestion({
  questionNumber,
  totalQuestions,
  question,
  options,
  selectedAnswer,
  onSelectAnswer,
  handleAction,
  mainColor,
  actionLabel,
  isAnswerSubmitted,
  correctAnswer,
  answerStatusMessage,
}: QuizQuestionProps) {
  const progressBarWidth = `${((questionNumber + 1) / totalQuestions) * 100}%`;
  const questionHeadingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    questionHeadingRef.current?.focus();
  }, [questionNumber]);
  return (
    <div className="flex flex-col lg:flex-row lg:gap-32">
      <div className="flex flex-col lg:h-118">
        <p className="text-preset-5-mobile md:text-preset-6 text-fem-gray-500 dark:text-fem-blue-300 mt-1 mb-4 md:mt-0 md:mb-5">
          Question <span>{questionNumber + 1}</span> of {totalQuestions}
        </p>
        <h1
          ref={questionHeadingRef}
          tabIndex={-1}
          className="text-preset-3-mobile md:text-preset-3 text-fem-blue-900 dark:text-fem-white mb-6 focus:outline-0"
        >
          {question}
        </h1>
        <div
          aria-hidden="true"
          className="bg-fem-white dark:bg-fem-blue-850 mb-10 flex h-4 w-full items-center rounded-full p-1 lg:mt-auto lg:mb-0"
        >
          <div
            className="bg-fem-purple-600 h-2 rounded-full"
            style={{ width: progressBarWidth }}
          ></div>
        </div>
      </div>
      <div>
        <QuizQuestionRadio
          question={question}
          options={options}
          selectedAnswer={selectedAnswer}
          correctAnswer={correctAnswer}
          onSelectAnswer={onSelectAnswer}
          mainColor={mainColor}
          isAnswerSubmitted={isAnswerSubmitted}
        />

        <button
          disabled={selectedAnswer === null}
          className="focus-visible:outline-fem-purple-600 bg-fem-purple-600 text-preset-4-mobile md:text-preset-4 text-fem-white mt-4 w-full cursor-pointer rounded-xl py-5 transition-opacity hover:opacity-50 focus-visible:outline-3 focus-visible:outline-offset-4 disabled:cursor-auto disabled:opacity-50 md:mt-8 md:rounded-3xl md:py-8"
          onClick={handleAction}
          type="button"
        >
          {actionLabel}
        </button>
      </div>
      <p className="sr-only" role="status">
        {answerStatusMessage}
      </p>
    </div>
  );
}
