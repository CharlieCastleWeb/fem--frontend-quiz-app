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
    iconContainerClassName: "bg-fem-orange-50",
    buttonClassName: "hover:border-fem-orange-400",
  },
  css: {
    label: "CSS",
    iconSrc: cssIconSrc,
    iconAlt: "",
    iconContainerClassName: "bg-fem-green-100",
    buttonClassName: "hover:border-fem-green-500",
  },
  javascript: {
    label: "Javascript",
    iconSrc: javascriptIconSrc,
    iconAlt: "",
    iconContainerClassName: "bg-fem-blue-50",
    buttonClassName: "hover:border-fem-blue-500",
  },
  accessibility: {
    label: "Accessibility",
    iconSrc: accessibilityIconSrc,
    iconAlt: "",
    iconContainerClassName: "bg-fem-purple-100",
    buttonClassName: "hover:border-fem-purple-600",
  },
};
