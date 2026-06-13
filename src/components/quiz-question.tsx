import AppButton from "./app-button";

export type QuizQuestionProps = {
  questionNumber: number;
  totalQuestions: number;
  question?: string;
  progress?: number;
  options?: string[];
  selectedAnswer: number | null;
  onSelectAnswer: (optionIndex: number) => void;
  mainColor?: string;
};

export default function QuizQuestion({
  questionNumber,
  totalQuestions,
  question,
  options,
  selectedAnswer,
  onSelectAnswer,
  mainColor,
}: QuizQuestionProps) {
  const lightColor = "var(--color-fem-gray-50)";
  return (
    <>
      <p className="text-preset-5-mobile text-fem-gray-500 mb-4">
        Question <span>{questionNumber}</span> of {totalQuestions}
      </p>
      <p className="text-preset-3-mobile mb-6">{question}</p>
      <p className="mb-10">Progress Bar</p>
      <div className={`flex flex-col gap-4`}>
        {options!.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const letter = String.fromCharCode(65 + index);
          return (
            <AppButton
              label={option}
              iconText={letter}
              lightColor={lightColor}
              mainColor={mainColor}
              onClick={() => onSelectAnswer(index)}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </>
  );
}
