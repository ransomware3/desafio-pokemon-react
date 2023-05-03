import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeeProvider } from './contexts/theme-context'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ThemeeProvider>
			<App />
		</ThemeeProvider>
	</React.StrictMode>
)