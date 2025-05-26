import { GitBranch, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts';

export default function Header() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="w-full px-4 sm:px-6 py-4 dark:bg-gray-900 border-b border-gray-300  dark:border-gray-700 shadow-lg dark:shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-wide">
          ReactLab
        </a>

        {/* Icons */}
        <ul className="flex items-center gap-5 sm:gap-6 justify-between">
          <li>
            <a
              href="https://github.com/eh-munna/react-lab/tree/4.2"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-orange-500 focus:outline-hidden"
            >
              <GitBranch className="w-6 h-6" />
            </a>
          </li>

          {/* Theme Toggle */}
          <li
            aria-label="Toggle Theme"
            className="text-gray-700 dark:text-gray-200 hover:text-yellow-500 focus:outline-hidden transition"
          >
            <button
              className="cursor-pointer hover:text-orange-500"
              onClick={() => setDarkMode(!darkMode)}
            >
              <span>
                {darkMode ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
