'use client'

import { ReactNode } from 'react'
import UserProvider  from '@/context/userContext'

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<UserProvider>{children}</UserProvider>
	)
}
