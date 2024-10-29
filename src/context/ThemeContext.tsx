import { createContext, ReactNode, useState } from 'react'

interface ThemeContext {
	lightTheme: boolean;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext | null>(null)

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const [lightTheme, setLightTheme] = useState(true)

	function toggleTheme() {
		setLightTheme(!lightTheme)
	}

	return (
		<ThemeContext.Provider value={{ lightTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}