import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((p) => p === "light" ? "dark" : "light");
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    )
};

export default ThemeContext;