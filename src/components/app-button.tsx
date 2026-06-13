type AppButtonProps = {
  label: string;
  iconSrc?: string;
  iconAlt?: string;
  iconText?: string;
  lightColor?: string;
  mainColor?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function AppButton({
  label,
  iconSrc,
  iconAlt,
  iconText,
  lightColor,
  mainColor,
  onClick,
}: AppButtonProps) {
  return (
    <button
      onClick={onClick}
      className="hover:border-(--main-color) cursor-pointer p-3.25 bg-fem-white w-full flex items-center justify-items-start gap-4 rounded-xl border-3 border-transparent transition-all duration-300 ease-in-out"
      style={{ "--main-color": mainColor } as React.CSSProperties}
    >
      {(iconSrc || iconText) && (
        <div
          className={"rounded-md p-2 size-14 flex items-center justify-center"}
          style={{ backgroundColor: lightColor }}
        >
          {iconSrc ? (
            <img src={iconSrc} alt={iconAlt ?? ""} className="size-6"></img>
          ) : (
            iconText && (
              <span
                className="text-preset-4-mobile text-fem-gray-500"
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
