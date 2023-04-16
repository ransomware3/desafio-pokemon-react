import { useContext } from "react"
import { ThemeeContext, themes } from "../../contexts/theme-context"
import ReactSwitch from "react-switch"

const ThemeToggler = () => {
    const { theme, setTheme } = useContext(ThemeeContext)

    return(
        <>
            <ReactSwitch
                onChange={() => setTheme(theme === themes.dark ? themes.light : themes.dark)}
                checked={theme === themes.light}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={15}
                offColor="#222"
                onColor="#ffe2b0"
            />
        </>
    )
}

export { ThemeToggler }