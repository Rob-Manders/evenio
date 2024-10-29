'use client'

import styles           from './ThemeSwitch.module.css'
import { useContext }   from 'react'
import Icon_LightMode   from '@/components/icons/Icon_LightMode'
import Icon_DarkMode    from '@/components/icons/Icon_DarkMode'
import { ThemeContext } from '@/context/ThemeContext'

export default function ThemeSwitch() {
	const { lightTheme, toggleTheme } = useContext(ThemeContext)!

	return (
		<button className={styles.button} onClick={toggleTheme} aria-label="Toggle colour theme">
			{lightTheme ? <Icon_LightMode /> : <Icon_DarkMode />}
		</button>
	)
}