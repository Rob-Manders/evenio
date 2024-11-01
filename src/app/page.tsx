import styles        from './page.module.css'
import { SearchBar } from '@/components/elements'

export default function Home() {
	return (
		<main className={styles.main}>
			<SearchBar />
			<p className={styles.subHeading}>Events and socials in the North East</p>
		</main>
	)
}
