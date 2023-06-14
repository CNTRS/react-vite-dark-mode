import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const DEFAULT_SPINNER_PATH = "../assets/spinner.svg";

export default function Loader({ when, children }) {

    const [spinner, setSpinner] = useState(DEFAULT_SPINNER_PATH);
    const { darkMode } = useContext(DarkModeContext);

    useEffect(() => {
        const spinnerPath = `../assets/spinner${darkMode ? "-white" : ""}.svg`;
        import(spinnerPath/* @vite-ignore */).then(({ default: svg }) => setSpinner(svg));
    }, [darkMode]);

    if (when) {
        return (
            <div className="flex flex-col justify-center p-20">
                <div className="flex flex-row justify-center pb-5">
                    <img src={spinner} className="logo dark:text-white" alt="loading" />
                </div>
                <div>Loading ...</div>
            </div>
        );
    }

    return children;
}