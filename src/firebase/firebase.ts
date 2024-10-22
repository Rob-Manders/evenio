import { initializeApp }  from '@firebase/app'
import { firebaseConfig } from '@/firebase/firebaseConfig'

export const app = initializeApp(firebaseConfig)
