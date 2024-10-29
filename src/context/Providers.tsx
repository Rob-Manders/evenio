'use client'

import { ReactNode } from 'react'
import UserProvider  from '@/context/UserContext'
import ThemeProvider from '@/context/ThemeContext'

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider>
			{children}
		</ThemeProvider>
	)
}
