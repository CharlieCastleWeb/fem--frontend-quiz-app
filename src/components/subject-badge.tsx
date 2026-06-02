import { subjectsConfig, type Subject } from "./subjects-config";

type SubjectBadgeProps = {
  subject: Subject;
};

export default function SubjectBadge({ subject }: SubjectBadgeProps) {
  return (
    <div className="flex gap-4 items-center">
      <div
        className={`rounded-md p-2 ${subjectsConfig[subject].iconContainerClassName}`}
      >
        <img
          src={subjectsConfig[subject].iconSrc}
          alt={subjectsConfig[subject].iconAlt}
          className="size-6"
        ></img>
      </div>
      <span className="text-preset-4-mobile text-fem-blue-900">
        {subjectsConfig[subject].label}
      </span>
    </div>
  );
}
