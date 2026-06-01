import ToggleSwitch from "./toggle-switch";
import sunIconSvg from "../assets/images/icon-sun-dark.svg";
import sunMoonSvg from "../assets/images/icon-moon-dark.svg";
import { useEffect, useState } from "react";

const sunIcon = <img src={sunIconSvg} alt="" className="size-4" />;
const sunMoon = <img src={sunMoonSvg} alt="" className="size-4" />;

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const localStorageIsDarkItem = localStorage.getItem("isDark");
    if (localStorageIsDarkItem !== null) {
      return localStorageIsDarkItem === "true";
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("isDark", String(isDark));
  }, [isDark]);

  return (
    <ToggleSwitch
      prepend={sunIcon}
      label="Toggle dark theme"
      append={sunMoon}
      checked={isDark}
      onChange={setIsDark}
    ></ToggleSwitch>
  );
}
