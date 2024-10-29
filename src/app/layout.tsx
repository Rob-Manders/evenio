import '@/styles/normalize.css'
import '@/styles/fonts.css'
import '@/styles/globals.css'

import type { Metadata } from 'next'
import { ReactNode }     from 'react'
import Providers         from '@/context/Providers'
import { Header }        from '@/components/layout'

export const metadata: Metadata = {
	title: 'Evenio',
	description: 'Events and social gatherings in the North East'
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
	return (
		<html lang="en">
		<Providers>
			<body>
			<Header />
			{children}
			</body>
		</Providers>
		</html>
	)
}
