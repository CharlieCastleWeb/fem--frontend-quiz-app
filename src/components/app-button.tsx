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
      className={`cursor-pointer p-3.25 lg:p-5.25 bg-fem-white dark:bg-fem-blue-850 w-full flex items-center  justify-items-start gap-4 md:gap-8 rounded-xl md:rounded-3xl border-3 border-transparent transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:pointer-events-none hover:border-(--main-color)/60`}
      style={{ "--main-color": mainColor } as React.CSSProperties}
      disabled={disabled}
    >
      <div
        className={
          "shrink-0 rounded-md md:rounded-xl p-1 size-10 flex items-center justify-center md:size-14 transition-colors"
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
