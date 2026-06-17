import AppButton from "./app-button";
import { subjectsConfig, type Subject } from "./subjects-config";

type SubjectSelectorProps = {
  className?: string;
  onSelectSubject: (subject: Subject) => void;
};

export default function SubjectSelector({
  className,
  onSelectSubject,
}: SubjectSelectorProps) {
  const subjectEntries = Object.entries(subjectsConfig) as [
    Subject,
    (typeof subjectsConfig)[Subject],
  ][];
  return (
    <div className={`flex flex-col gap-4 ${className ?? ""} md:gap-6`}>
      {subjectEntries.map(([subjectKey, subject]) => {
        return (
          <AppButton
            onClick={() => onSelectSubject(subjectKey)}
            label={subject.label}
            iconSrc={subject.iconSrc}
            iconAlt={subject.iconAlt}
            lightColor={subject.lightColor}
            mainColor={subject.mainColor}
            key={subject.label}
          ></AppButton>
        );
      })}
    </div>
  );
}
