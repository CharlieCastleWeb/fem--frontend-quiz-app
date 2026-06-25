import { subjectsConfig, type Subject } from "./subjects-config";

type SubjectBadgeProps = {
  subject: Subject;
};

export default function SubjectBadge({ subject }: SubjectBadgeProps) {
  const subjectConfig = subjectsConfig[subject];
  return (
    <div className="flex w-fit items-center gap-4 md:gap-6">
      <div
        className="rounded-md p-2"
        style={{ backgroundColor: subjectConfig.lightColor }}
      >
        <img
          src={subjectConfig.iconSrc}
          alt={subjectConfig.iconAlt}
          className="size-6 md:size-10"
        ></img>
      </div>
      <span className="text-preset-4-mobile md:text-preset-4 text-fem-blue-900 dark:text-fem-white">
        {subjectsConfig[subject].label}
      </span>
    </div>
  );
}
