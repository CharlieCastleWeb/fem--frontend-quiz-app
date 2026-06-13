type AppButtonProps = {
  label: string;
  icon?: string;
  iconAlt?: string;
  lightColor?: string;
  mainColor?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function AppButton({
  label,
  icon,
  iconAlt,
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
      {icon && (
        <div
          className={"rounded-md p-2"}
          style={{ backgroundColor: lightColor }}
        >
          <img src={icon} alt={iconAlt} className="size-6"></img>
        </div>
      )}
      <span className="text-preset-4-mobile">{label}</span>
    </button>
  );
}
