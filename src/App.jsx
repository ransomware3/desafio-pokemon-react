import { AppRoutes } from "./routes"
import { GlobalStyle } from "./style/global-style"
import { SkeletonTheme } from "react-loading-skeleton"
import { useContext } from "react"
import { ThemeeContext } from "./contexts/theme-context"

export function App() {
	const { theme } = useContext(ThemeeContext)

	return (
		<SkeletonTheme baseColor={theme.skeletonColor} highlightColor={theme.skeletonHigh}>
			<GlobalStyle />
			<AppRoutes />
		</SkeletonTheme>
	)
}