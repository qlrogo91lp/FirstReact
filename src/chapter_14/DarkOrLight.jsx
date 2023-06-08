import { useState, useCallback } from "react"
import ThemeContext from "./ThemeContext"
import MainContent from "./MainContent"

function DarkOrLight(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if (theme == "light") {
            setTheme("dark");
        } else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme]);

    // Provider로 감싸서 하위 컴포넌트에서 theme 값을 사용할 수 있게함
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContent />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;