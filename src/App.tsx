import "./App.css";
import ThemeToggle from "./components/theme-toggle";

function App() {
  return (
    <div className="bg-fem-gray-50 bg-mobile-light min-h-screen min-w-screen">
      <header className="py-4 px-6 flex justify-end items-center">
        <ThemeToggle></ThemeToggle>
      </header>
    </div>
  );
}

export default App;
