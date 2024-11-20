'use client'

import styles                              from './Avatar.module.css'
import Link                                from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { UserContext }                     from '@/context/UserContext'

const DEFAULT_USER_IMAGE = 'https://picsum.photos/42'

export default function Avatar() {
	const { user } = useContext(UserContext)

	const [userImage, setUserImage] = useState<string>(DEFAULT_USER_IMAGE)

	useEffect(() => {
		if (user) {
			setUserImage(user.photoURL || DEFAULT_USER_IMAGE)
		} else {
			setUserImage(DEFAULT_USER_IMAGE)
		}
	}, [user])

	return (
		<Link className={styles.avatar} href="/profile" aria-label="Visit your user settings page">
			<img src={userImage} alt="user image" width={42} height={42} />
		</Link>
	)
}