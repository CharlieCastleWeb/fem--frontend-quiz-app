import SubjectBadge from "./subject-badge";
import type { Subject } from "./subjects-config";
import ThemeToggle from "./theme-toggle";

type AppHeaderProps = {
  selectedSubject: Subject | null;
};

export default function AppHeader({ selectedSubject }: AppHeaderProps) {
  return (
    <header className="h-18 py-4 flex justify-between items-center md:py-10 md:h-10 lg:py-21 lg:h-14 lg:max-w-290 lg:mx-auto lg:px-0">
      <div className="min-w-0">
        {selectedSubject && (
          <SubjectBadge subject={selectedSubject}></SubjectBadge>
        )}
      </div>
      <ThemeToggle />
    </header>
  );
}
