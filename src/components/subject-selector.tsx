import AppButton from "./app-button";
import htmlIconSrc from "../assets/images/icon-html.svg";
import cssIconSrc from "../assets/images/icon-css.svg";
import javascriptIconSrc from "../assets/images/icon-js.svg";
import accessibilityIconSrc from "../assets/images/icon-accessibility.svg";

type SubjectSelectorProps = {
  className?: string;
};

const subjectsConfig = [
  {
    label: "HTML",
    iconSrc: htmlIconSrc,
    iconAlt: "",
    iconContainerClassName: "bg-fem-orange-50",
    buttonClassName: "hover:border-fem-orange-400",
  },
  {
    label: "CSS",
    iconSrc: cssIconSrc,
    iconAlt: "",
    iconContainerClassName: "bg-fem-green-100",
    buttonClassName: "hover:border-fem-green-500",
  },
  {
    label: "Javascript",
    iconSrc: javascriptIconSrc,
    iconAlt: "",
    iconContainerClassName: "bg-fem-blue-50",
    buttonClassName: "hover:border-fem-blue-500",
  },
  {
    label: "Accessibility",
    iconSrc: accessibilityIconSrc,
    iconAlt: "",
    iconContainerClassName: "bg-fem-purple-100",
    buttonClassName: "hover:border-fem-purple-600",
  },
];

export default function SubjectSelector({ className }: SubjectSelectorProps) {
  return (
    <div className={`flex flex-col gap-4 ${className ?? ""}`}>
      {subjectsConfig.map((subject) => {
        return (
          <AppButton
            label={subject.label}
            icon={subject.iconSrc}
            iconAlt={subject.iconAlt}
            iconContainerClassName={subject.iconContainerClassName}
            buttonClassName={subject.buttonClassName}
            key={subject.label}
          ></AppButton>
        );
      })}
    </div>
  );
}
