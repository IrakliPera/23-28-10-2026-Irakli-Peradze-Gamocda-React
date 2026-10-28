import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeChild() {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <h3>Current theme: {theme}</h3>
        </div>
    );
}

export default function ThemeExample() {
    return (
        <ThemeContext.Provider value="dark">
            <ThemeChild />
        </ThemeContext.Provider>
    );
}
