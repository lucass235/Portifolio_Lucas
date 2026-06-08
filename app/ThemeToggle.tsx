"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";
type ThemeToggleLabels = {
  dark: string;
  light: string;
  toggle: string;
};

const STORAGE_KEY = "portfolio-theme";
const DEFAULT_LABELS: ThemeToggleLabels = {
  dark: "Modo escuro",
  light: "Modo claro",
  toggle: "Alternar tema",
};

export default function ThemeToggle({ labels = DEFAULT_LABELS }: { labels?: ThemeToggleLabels }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const isDark = theme === "dark";
  const label = isDark ? labels.dark : labels.light;

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
      aria-label={labels.toggle}
      aria-pressed={isDark}
      title={labels.toggle}
      onClick={toggleTheme}
    >
      {isDark ? <Moon aria-hidden="true" size={17} /> : <Sun aria-hidden="true" size={17} />}
      <span>{label}</span>
    </button>
  );
}
