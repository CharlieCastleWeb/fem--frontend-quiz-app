import "./App.css";
import ThemeToggle from "./components/theme-toggle";

function App() {
  return (
    <div
      className="bg-fem-gray-50 bg-mobile-light-pattern h-screen w-full
    dark:bg-fem-blue-900 dark:bg-mobile-dark-pattern duration-300 ease-in-out"
    >
      <header className="py-4 px-6 flex justify-end items-center">
        <ThemeToggle></ThemeToggle>
      </header>
    </div>
  );
}

export default App;
