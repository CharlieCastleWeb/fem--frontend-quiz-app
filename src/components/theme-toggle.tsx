import ToggleSwitch from "./toggle-switch";
import iconSunDarkSvg from "../assets/images/icon-sun-dark.svg";
import iconMoonDarkSvg from "../assets/images/icon-moon-dark.svg";
import iconSunLightSvg from "../assets/images/icon-sun-light.svg";
import iconMoonLightSvg from "../assets/images/icon-moon-light.svg";
import { useEffect, useState } from "react";

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

  const iconSunSrc = isDark ? iconSunLightSvg : iconSunDarkSvg;
  const iconSun = <img src={iconSunSrc} alt="" className="size-4 md:size-5" />;
  const iconMoonSrc = isDark ? iconMoonLightSvg : iconMoonDarkSvg;
  const iconMoon = (
    <img src={iconMoonSrc} alt="" className="size-4 md:size-5" />
  );

  return (
    <ToggleSwitch
      prepend={iconSun}
      label="Toggle dark theme"
      append={iconMoon}
      checked={isDark}
      onChange={setIsDark}
    ></ToggleSwitch>
  );
}
