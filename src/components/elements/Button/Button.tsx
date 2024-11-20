import styles from './Button.module.css'

interface Props {
	text: string
	action: () => void
}

export default function({ text, action }: Props) {
	return <button className={styles.Button} onClick={action}>{text}</button>
}