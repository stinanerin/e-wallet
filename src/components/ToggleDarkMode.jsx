import { useState } from "react";
import { Button } from "./Button";

export const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        const root = document.documentElement;
        root.setAttribute("data-theme", darkMode ? "light" : "dark");
    };

    return (
        <Button type="primary" onClick={toggleDarkMode}>
            {darkMode ? "light" : "dark"}-mode
        </Button>
    );
};
