import { auth }                                          from '@/firebase'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { onAuthStateChanged, User }                      from '@firebase/auth'

export const UserContext = createContext<{ user: User | null }>({ user: null })

export default function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		onAuthStateChanged(auth, u => {
			if (u) setUser(u)
			else setUser(null)
		})
	}, [auth])

	return (
		<UserContext.Provider value={{ user }}>
			{children}
		</UserContext.Provider>
	)
}