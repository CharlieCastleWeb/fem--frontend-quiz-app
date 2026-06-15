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

  return (
    <button
      onClick={onClick}
      className={`
         cursor-pointer p-3.25 bg-fem-white w-full flex items-center 
        justify-items-start gap-4 rounded-xl border-3  transition-all duration-300 ease-in-out
        disabled:cursor-not-allowed disabled:pointer-events-none
        ${borderClass}
      `}
      style={{ "--main-color": mainColor } as React.CSSProperties}
      disabled={disabled}
    >
      {(iconSrc || iconText) && (
        <div
          className={"rounded-md p-2 size-14 flex items-center justify-center"}
          style={{ backgroundColor: iconTextBackgroundColor }}
        >
          {iconSrc ? (
            <img src={iconSrc} alt={iconAlt ?? ""} className="size-6"></img>
          ) : (
            iconText && (
              <span
                className={`text-preset-4-mobile ${iconTextColorClass}`}
                aria-hidden="true"
              >
                {iconText}
              </span>
            )
          )}
        </div>
      )}
      <span className="text-preset-4-mobile text-fem-blue-900">{label}</span>
    </button>
  );
}
