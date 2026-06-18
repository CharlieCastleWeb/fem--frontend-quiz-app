import AppButton from "./app-button";

export type QuizQuestionProps = {
  questionNumber: number;
  totalQuestions: number;
  question?: string;
  progress?: number;
  options?: string[];
  selectedAnswer: number | null;
  onSelectAnswer: (optionIndex: number) => void;
  handleAction: () => void;
  mainColor?: string;
  actionLabel?: string;
  isAnswerSubmitted?: boolean;
  correctAnswer?: string;
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
}: QuizQuestionProps) {
  const lightColor = "var(--color-fem-gray-50)";
  const progressBarWidth = `${((questionNumber + 1) / totalQuestions) * 100}%`;
  return (
    <div className="flex flex-col lg:flex-row lg:gap-32">
      <div className="lg:h-118 flex flex-col">
        <p className="text-preset-5-mobile md:text-preset-6 text-fem-gray-500 mb-4 md:mb-5 mt-1 md:mt-0 dark:text-fem-blue-300">
          Question <span>{questionNumber + 1}</span> of {totalQuestions}
        </p>
        <p className="text-preset-3-mobile md:text-preset-3 text-fem-blue-900 mb-6 dark:text-fem-white">
          {question}
        </p>
        <div className="w-full h-4 bg-fem-white dark:bg-fem-blue-850 mb-10 lg:mb-0 rounded-full flex items-center p-1 lg:mt-auto">
          <div
            className="bg-fem-purple-600 h-2 rounded-full"
            style={{ width: progressBarWidth }}
          ></div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-4 lg:w-141">
          {options!.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = isAnswerSubmitted && option === correctAnswer;
            const isIncorrect = isAnswerSubmitted && option !== correctAnswer;
            const letter = String.fromCharCode(65 + index);
            return (
              <AppButton
                key={option}
                label={option}
                iconText={letter}
                lightColor={lightColor}
                mainColor={mainColor}
                onClick={() => onSelectAnswer(index)}
                isSelected={isSelected}
                isCorrect={isCorrect}
                isIncorrect={isIncorrect}
                disabled={isAnswerSubmitted}
              />
            );
          })}
        </div>

        <button
          disabled={selectedAnswer === null}
          className="cursor-pointer bg-fem-purple-600 w-full text-preset-4-mobile md:text-preset-4 text-fem-white py-5 md:py-8 rounded-xl md:rounded-3xl mt-4 md:mt-8 disabled:opacity-50"
          onClick={handleAction}
          type="button"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}
