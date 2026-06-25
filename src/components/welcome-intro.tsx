export default function WelcomeIntro() {
  return (
    <div>
      <h1 className="flex flex-col gap-2">
        <span className="text-preset-2-mobile-light text-fem-blue-900 md:text-preset-2-light dark:text-fem-white whitespace-nowrap">
          Welcome to the
        </span>
        <span className="text-preset-2-mobile text-fem-blue-900 md:text-preset-2-medium dark:text-fem-white whitespace-nowrap">
          Frontend Quiz!
        </span>
      </h1>
      <p className="text-preset-5-mobile text-fem-gray-500 dark:text-fem-blue-300 md:text-preset-6 mt-5 tracking-[0.2px] md:mt-4">
        Pick a subject to get started.
      </p>
    </div>
  );
}
