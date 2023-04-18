import { createContext } from "react"
import { useTheme } from "../hooks/useTheme"
// import { useState } from "react"

export const themes = {
    dark: {
        color1: '#ccc',
        color2: '#333',
        color3: '#ccc',
        background1: '#222',
        background2: '#111',
        background3: '#333',
        background4: '#000',
        skeletonColor: '#333',
        skeletonHigh: '#444'
    },
    light: {
        color1: '#fff',
        color2: '#000',
        color3: '#000',
        background1: '#ffe2b0',
        background2: '#c63140',
        background3: '#ccc',
        background4: '#6b0000',
        skeletonColor: '#e6cca1',
        skeletonHigh: '#f5daab'
    }
}

export const ThemeeContext = createContext({})

export const ThemeeProvider = ({children}) => {

    const [theme, setTheme] = useTheme('theme', themes.light)
    // const [theme, setTheme] = useState(themes.light)

    return(
        <>
            <ThemeeContext.Provider value={{theme, setTheme}}>
                {children}
            </ThemeeContext.Provider>
        </>
    )
}