import { useId, type ReactNode } from "react";

type ToggleSwitchProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  prepend?: ReactNode;
  append?: ReactNode;
};

export default function ToggleSwitch({
  label,
  checked,
  onChange,
  prepend,
  append,
}: ToggleSwitchProps) {
  const id = useId();
  return (
    <div className="flex gap-2 items-center md:gap-4">
      {prepend && <div>{prepend}</div>}
      <label className="w-8 md:w-12 h-5 md:h-7 p-1 bg-fem-purple-600 rounded-full relative cursor-pointer">
        <span className="sr-only">{label}</span>
        <input
          type="checkbox"
          id={id}
          className="sr-only peer"
          role="switch"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span className="size-3 md:size-5 top-1/2 -translate-y-1/2 absolute bg-fem-white rounded-full peer-checked:translate-x-full"></span>
      </label>
      {append && <div>{append}</div>}
    </div>
  );
}
