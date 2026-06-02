export default function WelcomeIntro() {
  return (
    <>
      <h1 className="flex flex-col gap-2">
        <span className="text-preset-2-mobile-light text-fem-blue-900">
          Welcome to the
        </span>
        <span className="text-preset-2-mobile text-fem-blue-900">
          Frontend Quiz!
        </span>
      </h1>
      <p className="text-preset-5-mobile text-fem-gray-500 mt-4">
        Pick a subject to get started.
      </p>
    </>
  );
}
