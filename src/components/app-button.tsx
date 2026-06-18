import iconCorrect from "../assets/images/icon-correct.svg";
import iconIncorrect from "../assets/images/icon-incorrect.svg";

type AppButtonProps = {
  label: string;
  iconSrc?: string;
  iconAlt?: string;
  iconText?: string;
  lightColor?: string;
  mainColor?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
  isCorrect?: boolean;
  isIncorrect?: boolean;
  disabled?: boolean;
};

export default function AppButton({
  label,
  iconSrc,
  iconAlt,
  iconText,
  lightColor,
  mainColor,
  onClick,
  isSelected,
  isCorrect,
  isIncorrect,
  disabled,
}: AppButtonProps) {
  const showCorrect = isCorrect;
  const showIncorrect = isSelected && isIncorrect;
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
      : lightColor;
  const iconTextColorClass =
    showCorrect || showIncorrect ? "text-fem-white" : "text-fem-gray-500";
  const appendIcon = showCorrect
    ? iconCorrect
    : showIncorrect
      ? iconIncorrect
      : undefined;

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer p-3.25 lg:p-5.25 bg-fem-white dark:bg-fem-blue-850 w-full flex items-center  justify-items-start gap-4 md:gap-8 rounded-xl md:rounded-3xl border-3 transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:pointer-events-none ${borderClass}`}
      style={{ "--main-color": mainColor } as React.CSSProperties}
      disabled={disabled}
    >
      {(iconSrc || iconText) && (
        <div
          className={
            "shrink-0 rounded-md md:rounded-xl p-1 size-10 flex items-center justify-center md:size-14 transition-colors"
          }
          style={{ backgroundColor: iconTextBackgroundColor }}
        >
          {iconSrc ? (
            <img
              src={iconSrc}
              alt={iconAlt ?? ""}
              className="size-7 md:size-10"
            ></img>
          ) : (
            iconText && (
              <span
                className={`text-preset-4-mobile md:text-preset-4 ${iconTextColorClass}`}
                aria-hidden="true"
              >
                {iconText}
              </span>
            )
          )}
        </div>
      )}
      <span className="text-preset-4-mobile text-fem-blue-900 dark:text-fem-white md:text-preset-4">
        {label}
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
    </button>
  );
}
