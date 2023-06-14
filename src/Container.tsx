import { useContext, useState, useCallback, useMemo } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import Loader from "./components/loader";

export default function Container() {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const [showLoading, setShowLoading] = useState(false);

    const toggleLoading = useCallback(() => {
        const newValue = !showLoading;
        setShowLoading(newValue);
        setTimeout(() => setShowLoading(!newValue), 5000);
    }, [showLoading]);

    const darkModeButtonLabel = useMemo(() => `Dark mode is ${darkMode ? "enabled" : "disabled"}`, [darkMode]);
    const showLoadingButtonLabel = useMemo(() => `${showLoading ? "Disable" : "Enable"} loading`, [showLoading]);

    return (
        <Loader when={showLoading}>
            <h1 className="text-3xl font-bold underline">Vite + React + Tailwind</h1>
            <div className="card mr-auto ml-auto w-auto inline-block">
                <button onClick={toggleDarkMode}>
                    {darkModeButtonLabel}
                </button>
                <button onClick={toggleLoading}>
                    {showLoadingButtonLabel}
                </button>
            </div>
        </Loader>
    );
};