import styles from './Avatar.module.css'
import Link   from 'next/link'

export default function Avatar() {
	return (
		<Link className={styles.avatar} href="/profile" aria-label="Visit your user settings page" />
	)
}