import { AppRoutes } from "./pages/routes"
import { GlobalStyle } from "./style/global-style"
import { ThemeeProvider } from './contexts/theme-context'

function App() {
	return (
		<>
			<ThemeeProvider>
				<GlobalStyle/>
				<AppRoutes/>
			</ThemeeProvider>
		</>
	)
}

export { App }