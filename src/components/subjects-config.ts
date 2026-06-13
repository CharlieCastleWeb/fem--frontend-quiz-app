import htmlIconSrc from "../assets/images/icon-html.svg";
import cssIconSrc from "../assets/images/icon-css.svg";
import javascriptIconSrc from "../assets/images/icon-js.svg";
import accessibilityIconSrc from "../assets/images/icon-accessibility.svg";

export type Subject = keyof typeof subjectsConfig;

export const subjectsConfig = {
  html: {
    label: "HTML",
    iconSrc: htmlIconSrc,
    iconAlt: "",
    lightColor: "var(--color-fem-orange-50)",
    mainColor: "var(--color-fem-orange-400)",
  },
  css: {
    label: "CSS",
    iconSrc: cssIconSrc,
    iconAlt: "",
    lightColor: "var(--color-fem-green-100)",
    mainColor: "var(--color-fem-green-500)",
  },
  javascript: {
    label: "Javascript",
    iconSrc: javascriptIconSrc,
    iconAlt: "",
    lightColor: "var(--color-fem-blue-50)",
    mainColor: "var(--color-fem-blue-500)",
  },
  accessibility: {
    label: "Accessibility",
    iconSrc: accessibilityIconSrc,
    iconAlt: "",
    lightColor: "var(--color-fem-purple-100)",
    mainColor: "var(--color-fem-purple-600)",
  },
};
