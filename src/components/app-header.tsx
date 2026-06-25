import SubjectBadge from "./subject-badge";
import type { Subject } from "../config/subjects-config";
import ThemeToggle from "./theme-toggle";

type AppHeaderProps = {
  selectedSubject: Subject | null;
};

export default function AppHeader({ selectedSubject }: AppHeaderProps) {
  return (
    <header className="flex h-18 items-center justify-between py-4 md:h-10 md:py-10 lg:mx-auto lg:h-14 lg:max-w-290 lg:px-0 lg:py-21">
      <div className="min-w-0">
        {selectedSubject && (
          <SubjectBadge subject={selectedSubject}></SubjectBadge>
        )}
      </div>
      <ThemeToggle />
    </header>
  );
}
