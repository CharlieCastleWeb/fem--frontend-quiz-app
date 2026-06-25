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
    <div className="flex items-center gap-2 md:gap-4">
      {prepend && <div>{prepend}</div>}
      <label className="bg-fem-purple-600 has-focus-visible:outline-fem-purple-600 relative h-5 w-8 cursor-pointer rounded-full p-1 has-focus-visible:outline-3 has-focus-visible:outline-offset-4 md:h-7 md:w-12">
        <span className="sr-only">{label}</span>
        <input
          type="checkbox"
          id={id}
          className="peer sr-only"
          role="switch"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span className="bg-fem-white absolute top-1/2 size-3 -translate-y-1/2 rounded-full peer-checked:translate-x-full md:size-5"></span>
      </label>
      {append && <div>{append}</div>}
    </div>
  );
}
