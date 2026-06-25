import iconCorrect from "../assets/images/icon-correct.svg";
import iconIncorrect from "../assets/images/icon-incorrect.svg";

export type QuizQuestionRadioProps = {
  question: string;
  options: string[];
  selectedAnswer: number | null;
  onSelectAnswer: (optionIndex: number) => void;
  isAnswerSubmitted: boolean;
  correctAnswer: string;
  mainColor: string;
};

export default function QuizQuestionRadio({
  question,
  options,
  selectedAnswer,
  correctAnswer,
  onSelectAnswer,
  mainColor,
  isAnswerSubmitted,
}: QuizQuestionRadioProps) {
  const lightColor = "var(--color-fem-gray-50)";
  return (
    <div className="flex flex-col lg:flex-row lg:gap-32">
      <div>
        <fieldset className="flex flex-col gap-4 md:gap-6 lg:w-141 lg:gap-4">
          <legend className="sr-only">{question}</legend>
          {options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = isAnswerSubmitted && option === correctAnswer;
            const isIncorrect = isAnswerSubmitted && option !== correctAnswer;
            const showCorrect = isCorrect;
            const showIncorrect = isSelected && isIncorrect;
            const letter = String.fromCharCode(65 + index);
            const borderClass = showCorrect
              ? "border-fem-green-500"
              : showIncorrect
                ? "border-fem-red-500"
                : isSelected
                  ? "border-(--main-color)"
                  : "border-transparent hover:border-(--main-color)/60";
            const iconTextBackgroundColor = showCorrect
              ? "var(--color-fem-green-500)"
              : showIncorrect
                ? "var(--color-fem-red-500)"
                : isSelected
                  ? "var(--main-color)"
                  : lightColor;
            const iconTextColorClass =
              showCorrect || showIncorrect || isSelected
                ? "text-fem-white"
                : "text-fem-gray-500";
            const appendIcon = showCorrect
              ? iconCorrect
              : showIncorrect
                ? iconIncorrect
                : undefined;
            const radioButtonId = `answer-${index}`;
            return (
              <div key={radioButtonId}>
                <input
                  type="radio"
                  id={radioButtonId}
                  name="quiz-answer"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => onSelectAnswer(index)}
                  disabled={isAnswerSubmitted}
                  className="peer sr-only"
                />
                <label
                  htmlFor={radioButtonId}
                  className={`peer-focus-visible:outline-fem-purple-600 bg-fem-white dark:bg-fem-blue-850 flex w-full cursor-pointer items-center justify-items-start gap-4 rounded-xl border-3 p-3.25 transition-[background-color,border-color,color] duration-300 ease-in-out peer-focus-visible:outline-3 peer-focus-visible:outline-offset-4 peer-disabled:pointer-events-none peer-disabled:cursor-not-allowed md:gap-8 md:rounded-3xl lg:p-5.25 ${borderClass}`}
                  style={{ "--main-color": mainColor } as React.CSSProperties}
                >
                  <div
                    className={
                      "flex size-10 shrink-0 items-center justify-center rounded-md p-1 transition-colors md:size-14 md:rounded-xl"
                    }
                    style={{ backgroundColor: iconTextBackgroundColor }}
                  >
                    <span
                      className={`text-preset-4-mobile md:text-preset-4 ${iconTextColorClass}`}
                    >
                      {letter}
                    </span>
                  </div>
                  <span className="text-preset-4-mobile text-fem-blue-900 dark:text-fem-white md:text-preset-4">
                    {option}
                  </span>
                  {appendIcon && (
                    <span className="ml-auto shrink-0">
                      <img
                        src={appendIcon}
                        alt=""
                        aria-hidden
                        className="size-8 md:size-10"
                      />
                    </span>
                  )}
                </label>
              </div>
            );
          })}
        </fieldset>
      </div>
    </div>
  );
}
