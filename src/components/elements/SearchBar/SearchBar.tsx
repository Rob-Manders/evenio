import styles      from './SearchBar.module.css'
import Form        from 'next/form'
import Icon_Search from '@/components/icons/Icon_Search'

export default function SearchBar() {
	return (
		<Form className={styles.form} action={'/search'}>
			<input className={styles.input} type="text" name="query" placeholder="Search" />
			<button className={styles.button} type="submit"><Icon_Search className={styles.icon} /></button>
		</Form>
	)
}