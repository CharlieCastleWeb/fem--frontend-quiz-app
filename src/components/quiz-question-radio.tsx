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
        <fieldset className="flex flex-col gap-4 md:gap-6 lg:gap-4 lg:w-141">
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
                  className="sr-only peer"
                />
                <label
                  htmlFor={radioButtonId}
                  className={`peer-focus-visible:outline-3 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-fem-purple-600 peer-disabled:pointer-events-none peer-disabled:cursor-not-allowed cursor-pointer p-3.25 lg:p-5.25 bg-fem-white dark:bg-fem-blue-850 w-full flex items-center justify-items-start gap-4 md:gap-8 rounded-xl md:rounded-3xl border-3 transition-[background-color,border-color,color] duration-300 ease-in-out ${borderClass}`}
                  style={{ "--main-color": mainColor } as React.CSSProperties}
                >
                  <div
                    className={
                      "shrink-0 rounded-md md:rounded-xl p-1 size-10 flex items-center justify-center md:size-14 transition-colors"
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
                    <span className="shrink-0 ml-auto">
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
