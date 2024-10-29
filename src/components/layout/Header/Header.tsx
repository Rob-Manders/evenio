import styles                  from './Header.module.css'
import { Avatar, ThemeSwitch } from '@/components/elements'
import Link                    from 'next/link'

export default function Header() {
	return (
		<header className={styles.header}>
			<Link className={styles.titleLink} href="/" aria-label="Return to home page">
				<h1 className={styles.title}>Evenio</h1>
			</Link>

			<div className={styles.options}>
				<ThemeSwitch />
				<Avatar />
			</div>
		</header>
	)
}