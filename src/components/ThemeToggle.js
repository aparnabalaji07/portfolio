"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  if (!theme) return null;

  const next = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        setTheme(next);
      }}
      aria-label={`Switch to ${next} mode`}
      className="fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full bg-surface border border-text/10 flex items-center justify-center text-lg hover:border-accent transition-colors outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
    >
      💡
    </button>
  );
}
