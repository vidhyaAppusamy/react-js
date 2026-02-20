import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen w-screen flex items-center justify-center transition-all duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`text-center p-10 rounded-2xl shadow-xl transition-all duration-500 ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4">
          {isDark ? "Dark Mode" : "Light Mode"}
        </h1>

        <p className="mb-6 text-lg">
          Click the button to switch theme
        </p>

        <button
          onClick={() => setIsDark(!isDark)}
          className="px-6 py-2 rounded-lg font-semibold bg-blue-500 text-black hover:bg-blue-600 transition"
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
}
