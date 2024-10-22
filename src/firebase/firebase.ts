import { initializeApp } from '@firebase/app'
import { config }        from '@/firebase/config'

export const firebaseApp = initializeApp(config)
