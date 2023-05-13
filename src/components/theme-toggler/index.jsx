import { useContext, memo } from "react"
import { ThemeeContext, themes } from "../../contexts/theme-context"
import ReactSwitch from "react-switch"

const ThemeToggler = () => {
    const { theme, setTheme } = useContext(ThemeeContext)

    const handleTheme = () => {
        return (theme === themes.dark) ? themes.light : themes.dark
    }

    return (
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
    )
}

export default memo(ThemeToggler)