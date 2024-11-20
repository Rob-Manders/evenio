'use client'

import { useContext }               from 'react'
import { UserContext }              from '@/context/UserContext'
import { signInWithPopup, signOut } from '@firebase/auth'
import { auth }                     from '@/firebase'
import { googleAuthProvider }       from '@/firebase/auth'

export default function Profile() {
	const { user } = useContext(UserContext)

	return (
		<main>
			<h2>Profile</h2>
			{user && <p>{user.displayName}</p>}

			{
				user ? <button onClick={() => signOut(auth)}>Logout</button> : <button onClick={() => {
					signInWithPopup(auth, googleAuthProvider)
				}}>Login</button>
			}
		</main>
	)
}