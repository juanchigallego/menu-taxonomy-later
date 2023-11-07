import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
  ReactNode,
  useEffect
} from "react";

interface IDarkModeContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface IDarkModeProvider {
  children: ReactNode;
}

const DarkModeContext = createContext<IDarkModeContext>(null as any);

export const DarkModeProvider = ({ children }: IDarkModeProvider) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevState) => {
      const newState = !prevState;
      window.localStorage.setItem("dark-mode", JSON.stringify(newState));
      if (newState) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newState;
    });
  }, []);

  useEffect(() => {
    const localDarkMode = window.localStorage.getItem("dark-mode");
    const updateDarkModeClass = (isDarkMode: boolean) => {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        window.localStorage.setItem("dark-mode", JSON.stringify(true));
      } else {
        document.documentElement.classList.remove("dark");
        window.localStorage.setItem("dark-mode", JSON.stringify(false));
      }
    };
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (localDarkMode !== null) {
      const isDarkMode = localDarkMode === "true";
      setDarkMode(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (mediaQuery.matches) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const changeHandler = () => {
      const { matches } = mediaQuery;
      setDarkMode(matches);
      updateDarkModeClass(matches);
    };
    mediaQuery.addEventListener("change", changeHandler);
    changeHandler();

    return () => mediaQuery.removeEventListener("change", changeHandler);
  }, []);

  const value = useMemo(() => ({ darkMode, toggleDarkMode }), [
    darkMode,
    toggleDarkMode
  ]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
