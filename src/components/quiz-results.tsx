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
      <div className="flex flex-col gap-2 mb-10 md:mb-16">
        <p className="text-preset-2-mobile-light md:text-preset-2-light text-fem-blue-900 font-light dark:text-fem-white">
          Quiz completed
        </p>
        <p className="text-preset-2-mobile md:text-preset-2-medium md:font-medium text-fem-blue-900 dark:text-fem-white">
          You scored...
        </p>
      </div>
      <div className="w-full lg:w-141">
        <div className="bg-fem-white rounded-xl md:rounded-3xl p-8 md:p-12 mb-4 md:mb-8 dark:bg-fem-blue-850">
          <div className="flex justify-center mb-4 md:mb-10">
            <SubjectBadge subject={selectedSubject}></SubjectBadge>
          </div>

          <div
            className="flex flex-col gap-4"
            ref={resultsHeadingRef}
            tabIndex={-1}
          >
            <p className="text-preset-1-mobile md:text-preset-1 text-fem-blue-900 text-center dark:text-fem-white">
              {score}
            </p>
            <p className="text-preset-4-mobile md:text-preset-5-regular text-fem-gray-500 text-center dark:text-fem-blue-300">
              out of {totalQuestions}
            </p>
          </div>
        </div>
        <button
          className="focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-fem-purple-600 bg-fem-purple-600 cursor-pointer hover:opacity-50 p-5 md:p-8 w-full rounded-xl md:rounded-3xl text-preset-4-mobile md:text-preset-4 text-fem-white"
          onClick={onPlayAgain}
        >
          Play again
        </button>
      </div>
    </div>
  );
}
