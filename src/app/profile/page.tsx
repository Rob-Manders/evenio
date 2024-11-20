'use client'

import { useContext }  from 'react'
import { UserContext } from '@/context/UserContext'
import { LoginForm }   from '@/components/layout'

export default function Profile() {
	const { user } = useContext(UserContext)

	return (
		<main>
			<h2>Profile</h2>
			{user && <p>{user.displayName}</p>}

			<LoginForm />
		</main>
	)
}