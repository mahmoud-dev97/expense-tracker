import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import { toggleTheme } from "../store/themeSlice";

export function ThemeToggle() {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-gray-700" />
      )}
    </button>
  );
}
