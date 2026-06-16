import { subjectsConfig, type Subject } from "./subjects-config";

type SubjectBadgeProps = {
  subject: Subject;
};

export default function SubjectBadge({ subject }: SubjectBadgeProps) {
  const subjectConfig = subjectsConfig[subject];
  return (
    <div className="flex gap-4 items-center w-fit">
      <div
        className="rounded-md p-2"
        style={{ backgroundColor: subjectConfig.lightColor }}
      >
        <img
          src={subjectConfig.iconSrc}
          alt={subjectConfig.iconAlt}
          className="size-6"
        ></img>
      </div>
      <span className="text-preset-4-mobile text-fem-blue-900">
        {subjectsConfig[subject].label}
      </span>
    </div>
  );
}
