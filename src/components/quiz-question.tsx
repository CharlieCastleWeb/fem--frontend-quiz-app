import { useEffect, useRef } from "react";
import QuizQuestionRadio from "./quiz-question-radio";

export type QuizQuestionProps = {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  progress?: number;
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
      <div className="lg:h-118 flex flex-col">
        <p className="text-preset-5-mobile md:text-preset-6 text-fem-gray-500 mb-4 md:mb-5 mt-1 md:mt-0 dark:text-fem-blue-300">
          Question <span>{questionNumber + 1}</span> of {totalQuestions}
        </p>
        <h1
          ref={questionHeadingRef}
          tabIndex={-1}
          className="focus:outline-0 text-preset-3-mobile md:text-preset-3 text-fem-blue-900 mb-6 dark:text-fem-white"
        >
          {question}
        </h1>
        <div
          aria-hidden="true"
          className="w-full h-4 bg-fem-white dark:bg-fem-blue-850 mb-10 lg:mb-0 rounded-full flex items-center p-1 lg:mt-auto"
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
          className="focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-fem-purple-600 cursor-pointer bg-fem-purple-600 hover:opacity-50 transition-opacity w-full text-preset-4-mobile md:text-preset-4 text-fem-white py-5 md:py-8 rounded-xl md:rounded-3xl mt-4 md:mt-8 disabled:opacity-50 disabled:cursor-auto"
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
