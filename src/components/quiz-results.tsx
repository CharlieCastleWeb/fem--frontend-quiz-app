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
  return (
    <>
      <div className="flex flex-col gap-2 mb-10">
        <p className="text-preset-2-mobile-light text-fem-blue-900 font-light">
          Quiz completed
        </p>
        <p className="text-preset-2-mobile text-fem-blue-900 font-medium">
          You scored...
        </p>
      </div>
      <div className="bg-fem-white rounded-xl p-8 mb-4">
        <div className="flex justify-center mb-4">
          <SubjectBadge subject={selectedSubject}></SubjectBadge>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-preset-1-mobile text-fem-blue-900 text-center">
            {score}
          </p>
          <p className="text-preset-4-mobile text-fem-gray-500 text-center">
            out of {totalQuestions}
          </p>
        </div>
      </div>
      <button
        className="bg-fem-purple-600 py-5 w-full rounded-xl text-preset-4-mobile text-fem-white"
        onClick={onPlayAgain}
      >
        Play again
      </button>
    </>
  );
}
