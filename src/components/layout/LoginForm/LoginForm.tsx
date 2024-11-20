'use client'

import styles                       from './LoginForm.module.css'
import { useContext }               from 'react'
import { signInWithPopup, signOut } from '@firebase/auth'
import { auth }                     from '@/firebase'
import { googleAuthProvider }       from '@/firebase/auth'
import { UserContext }              from '@/context/UserContext'
import Button                       from '@/components/elements/Button/Button'

export default function LoginForm() {
	const { user } = useContext(UserContext)

	// TODO: Implement Facebook and GitHub providers.

	const loggedOutForm = (
		<Button text="Login" action={() => signInWithPopup(auth, googleAuthProvider)} />
	)

	const loggedInForm = (
		<Button text="Logout" action={() => signOut(auth)} />
	)

	return (
		<div className={styles.form}>
			{user ? loggedInForm : loggedOutForm}
		</div>
	)
}