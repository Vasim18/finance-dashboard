import { useState, useEffect } from "react";
import RoleSwitcher from "./RoleSwitcher";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // Apply dark class whenever state changes
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center transition-colors">
      
      {/* Title */}
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Finance Dashboard
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* 🌙 Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <RoleSwitcher />

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
          V
        </div>

      </div>
    </nav>
  );
}
