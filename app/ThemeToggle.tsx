"use client";

import { useEffect, useState } from "react";
import { Moon } from "lucide-react";

type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    const nextTheme: Theme = storedTheme === "light" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Alternar dark mode"
      aria-pressed={theme === "dark"}
      title="Alternar dark mode"
      onClick={toggleTheme}
    >
      <Moon aria-hidden="true" size={17} />
      <span>Dark mode</span>
    </button>
  );
}
