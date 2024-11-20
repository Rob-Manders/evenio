'use client'

import styles                       from './LoginForm.module.css'
import { useContext }               from 'react'
import { signInWithPopup, signOut } from '@firebase/auth'
import { auth }                     from '@/firebase'
import { googleAuthProvider }       from '@/firebase/auth'
import { UserContext }              from '@/context/UserContext'

export default function LoginForm() {
	const { user } = useContext(UserContext)

	// TODO: Implement Facebook and GitHub providers.

	const loggedOutForm = (
		<button onClick={() => signInWithPopup(auth, googleAuthProvider)}>Login</button>
	)

	const loggedInForm = (
		<button onClick={() => signOut(auth)}>Logout</button>
	)

	return (
		<div className={styles.form}>
			{user ? loggedInForm : loggedOutForm}
		</div>
	)
}