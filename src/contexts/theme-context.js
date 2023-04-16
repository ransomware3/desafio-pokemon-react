import { createContext } from "react"
import { useTheme } from "../hooks/useTheme"

export const themes = {
    dark: {
        color1: "#ccc",
        color2: "#333",
        background1: "#222",
        background2: "#111",
        background3: "#333",
        skeletonColor: "#333",
        skeletonHigh: "#444"
    },
    light: {
        color1: "#000",
        color2: "#000",
        background1: "#ff0000",
        background2: "#ffe2b0",
        background3: "#ccc",
        skeletonColor: "#ff4444",
        skeletonHigh: "#ff6666"
    }
}

export const ThemeeContext = createContext({})

export const ThemeeProvider = ({children}) => {

    const [theme, setTheme] = useTheme('theme', themes.dark)

    return(
        <>
            <ThemeeContext.Provider value={{theme, setTheme}}>
                {children}
            </ThemeeContext.Provider>
        </>
    )
}