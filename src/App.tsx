import { useState } from "react";
import "./App.css";
import SubjectSelector from "./components/subject-selector";
import WelcomeIntro from "./components/welcome-intro";
import Quiz from "./components/quiz";
import { type Subject } from "./config/subjects-config";
import AppHeader from "./components/app-header";

function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const handlePlayAgain = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="bg-fem-gray-50 bg-mobile-light-pattern md:bg-tablet-light-pattern lg:bg-desktop-light-pattern dark:bg-mobile-dark-pattern dark:md:bg-tablet-dark-pattern dark:lg:bg-desktop-dark-pattern dark:bg-fem-blue-900 min-h-screen w-full px-6 duration-300 ease-in-out md:px-16">
      <AppHeader selectedSubject={selectedSubject} />
      <main className="max-w-290 py-8 md:py-3 md:pb-16 lg:mx-auto lg:px-0 lg:pt-0">
        {selectedSubject === null ? (
          <div className="flex flex-col gap-10 md:gap-16 lg:flex-row lg:gap-32">
            <WelcomeIntro />
            <SubjectSelector
              className="w-full"
              onSelectSubject={setSelectedSubject}
            />
          </div>
        ) : (
          <Quiz subject={selectedSubject} onPlayAgain={handlePlayAgain} />
        )}
      </main>
    </div>
  );
}

export default App;
