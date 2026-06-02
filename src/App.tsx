import { useState } from "react";
import "./App.css";
import SubjectSelector from "./components/subject-selector";
import WelcomeIntro from "./components/welcome-intro";
import Quiz from "./components/quiz";
import type { Subject } from "./components/subjects-config";
import AppHeader from "./components/app-header";

function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  return (
    <div
      className="bg-fem-gray-50 bg-mobile-light-pattern h-screen w-full
    dark:bg-fem-blue-900 dark:bg-mobile-dark-pattern duration-300 ease-in-out"
    >
      <AppHeader selectedSubject={selectedSubject} />
      <main className="px-6 py-8">
        {selectedSubject === null ? (
          <>
            <WelcomeIntro />
            <SubjectSelector
              className="mt-10"
              onSelectSubject={setSelectedSubject}
            />
          </>
        ) : (
          <Quiz />
        )}
      </main>
    </div>
  );
}

export default App;
