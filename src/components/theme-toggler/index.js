import { useContext } from "react"
import { ThemeeContext, themes } from "../../contexts/theme-context"
import ReactSwitch from "react-switch"

const ThemeToggler = () => {
    const { theme, setTheme } = useContext(ThemeeContext)

    const handleTheme = () => {
        return(theme === themes.light) ? themes.dark : themes.light
    }

    return(
        <>
            <ReactSwitch
                onChange={() => setTheme(handleTheme)}
                checked={theme === themes.dark}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={15}
                offColor="#ffe2b0"
                onColor="#222"
            />
        </>
    )
}

export { ThemeToggler }