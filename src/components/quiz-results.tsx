import { useEffect, useRef } from "react";
import SubjectBadge from "./subject-badge";
import type { Subject } from "./subjects-config";

type QuizResultsProps = {
  score: number;
  totalQuestions: number;
  selectedSubject: Subject;
  onPlayAgain: () => void;
};

export default function QuizResults({
  score,
  totalQuestions,
  selectedSubject,
  onPlayAgain,
}: QuizResultsProps) {
  const resultsHeadingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    resultsHeadingRef.current?.focus();
  }, []);
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8">
      <div className="mb-10 flex flex-col gap-2 md:mb-16">
        <p className="text-preset-2-mobile-light md:text-preset-2-light text-fem-blue-900 dark:text-fem-white font-light">
          Quiz completed
        </p>
        <p className="text-preset-2-mobile md:text-preset-2-medium text-fem-blue-900 dark:text-fem-white md:font-medium">
          You scored...
        </p>
      </div>
      <div className="w-full lg:w-141">
        <div className="bg-fem-white dark:bg-fem-blue-850 mb-4 rounded-xl p-8 md:mb-8 md:rounded-3xl md:p-12">
          <div className="mb-4 flex justify-center md:mb-10">
            <SubjectBadge subject={selectedSubject}></SubjectBadge>
          </div>

          <div
            className="flex flex-col gap-4"
            ref={resultsHeadingRef}
            tabIndex={-1}
          >
            <p className="text-preset-1-mobile md:text-preset-1 text-fem-blue-900 dark:text-fem-white text-center">
              {score}
            </p>
            <p className="text-preset-4-mobile md:text-preset-5-regular text-fem-gray-500 dark:text-fem-blue-300 text-center">
              out of {totalQuestions}
            </p>
          </div>
        </div>
        <button
          className="focus-visible:outline-fem-purple-600 bg-fem-purple-600 text-preset-4-mobile md:text-preset-4 text-fem-white w-full cursor-pointer rounded-xl p-5 hover:opacity-50 focus-visible:outline-3 focus-visible:outline-offset-4 md:rounded-3xl md:p-8"
          onClick={onPlayAgain}
        >
          Play again
        </button>
      </div>
    </div>
  );
}
