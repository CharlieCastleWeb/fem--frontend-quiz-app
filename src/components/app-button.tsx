type AppButtonProps = {
  label: string;
  icon?: string;
  iconAlt?: string;
  iconContainerClassName?: string;
  buttonClassName?: string;
};

export default function AppButton({
  label,
  icon,
  iconAlt,
  iconContainerClassName,
  buttonClassName,
}: AppButtonProps) {
  return (
    <button
      className={`cursor-pointer p-3.25 bg-fem-white w-full flex items-center justify-items-start gap-4 rounded-xl border-3 border-transparent  ${buttonClassName ?? ""}`}
    >
      {icon && (
        <div className={`rounded-md p-2 ${iconContainerClassName ?? ""}`}>
          <img src={icon} alt={iconAlt} className="size-6"></img>
        </div>
      )}
      <span className="text-preset-4-mobile">{label}</span>
    </button>
  );
}
