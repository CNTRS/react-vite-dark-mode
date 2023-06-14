import { useCallback, createContext } from "react";
import { useLocalStorage } from "../hooks/useStorage";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {

    const [darkMode, setDarkMode] = useLocalStorage("dark", false);

    const toggleDarkMode = useCallback(() => setDarkMode(!darkMode), [darkMode]);

    if (darkMode) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export { DarkModeContext, DarkModeProvider };