// components/ThemeToggle.tsx

import { useTheme } from "@/app/themeprovider";
import { IconSun, IconMoon } from "@tabler/icons-react";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full transition-colors duration-300 ease-in-out"
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {!isDarkMode ? (
        <IconSun className="" size={20} />
      ) : (
        <IconMoon className=" " size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
