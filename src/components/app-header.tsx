import SubjectBadge from "./subject-badge";
import type { Subject } from "./subjects-config";
import ThemeToggle from "./theme-toggle";

type AppHeaderProps = {
  selectedSubject: Subject | null;
};

export default function AppHeader({ selectedSubject }: AppHeaderProps) {
  return (
    <header className="h-18 py-4 px-6 flex justify-between items-center">
      <div className="min-w-0">
        {selectedSubject && (
          <SubjectBadge subject={selectedSubject}></SubjectBadge>
        )}
      </div>
      <ThemeToggle />
    </header>
  );
}
