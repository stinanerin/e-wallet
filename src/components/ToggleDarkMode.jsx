import { useState } from "react";
import { Button } from "./Button";

import { userPrefersDarkMode } from "../utils/helpers";

export const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState(userPrefersDarkMode());

    const toggleDarkMode = () => {
        console.log(darkMode);
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
