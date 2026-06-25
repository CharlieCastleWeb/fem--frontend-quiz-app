type AppButtonProps = {
  label: string;
  iconSrc?: string;
  iconAlt?: string;
  lightColor?: string;
  mainColor?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export default function AppButton({
  label,
  iconSrc,
  iconAlt,
  lightColor,
  mainColor,
  onClick,
  disabled,
}: AppButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-fem-white dark:bg-fem-blue-850 focus-visible:outline-fem-purple-600 flex w-full cursor-pointer items-center justify-items-start gap-4 rounded-xl border-3 border-transparent p-3.25 transition-[background-color,border-color,color] duration-300 ease-in-out hover:border-(--main-color)/60 focus-visible:outline-3 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:cursor-not-allowed md:gap-8 md:rounded-3xl lg:p-5.25`}
      style={{ "--main-color": mainColor } as React.CSSProperties}
      disabled={disabled}
    >
      <div
        className={
          "flex size-10 shrink-0 items-center justify-center rounded-md p-1 transition-colors md:size-14 md:rounded-xl"
        }
        style={{ backgroundColor: lightColor }}
      >
        <img
          src={iconSrc}
          alt={iconAlt ?? ""}
          className="size-7 md:size-10"
        ></img>
      </div>
      <span className="text-preset-4-mobile text-fem-blue-900 dark:text-fem-white md:text-preset-4">
        {label}
      </span>
    </button>
  );
}
