import ToggleSwitch from "./toggle-switch";
import iconSunDarkSvg from "../assets/images/icon-sun-dark.svg";
import iconMoonDarkSvg from "../assets/images/icon-moon-dark.svg";
import iconSunLightSvg from "../assets/images/icon-sun-light.svg";
import iconMoonLightSvg from "../assets/images/icon-moon-light.svg";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const localStorageIsDarkItem = window.localStorage.getItem("isDark");
    if (localStorageIsDarkItem !== null) {
      return localStorageIsDarkItem === "true";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("isDark", String(isDark));
  }, [isDark]);

  const iconSunSrc = isDark ? iconSunLightSvg : iconSunDarkSvg;
  const iconSun = <img src={iconSunSrc} alt="" className="size-4 md:size-5" />;
  const iconMoonSrc = isDark ? iconMoonLightSvg : iconMoonDarkSvg;
  const iconMoon = (
    <img src={iconMoonSrc} alt="" className="size-4 md:size-5" />
  );

  return (
    <ToggleSwitch
      prepend={iconSun}
      label="Dark theme"
      append={iconMoon}
      checked={isDark}
      onChange={setIsDark}
    ></ToggleSwitch>
  );
}
