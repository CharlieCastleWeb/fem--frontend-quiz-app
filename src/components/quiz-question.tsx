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
    <>
      <p className="text-preset-5-mobile text-fem-gray-500 mb-4">
        Question <span>{questionNumber + 1}</span> of {totalQuestions}
      </p>
      <p className="text-preset-3-mobile mb-6">{question}</p>
      <div className="w-full h-4 bg-fem-white mb-10 rounded-full flex items-center p-1">
        <div
          className="bg-fem-purple-600 h-2 rounded-full"
          style={{ width: progressBarWidth }}
        ></div>
      </div>
      <div className={`flex flex-col gap-4`}>
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
      <div>
        <button
          disabled={selectedAnswer === null}
          className="cursor-pointer bg-fem-purple-600 w-full text-preset-4-mobile text-fem-white py-5 rounded-xl mt-4 disabled:opacity-50"
          onClick={handleAction}
          type="button"
        >
          {actionLabel}
        </button>
      </div>
    </>
  );
}
