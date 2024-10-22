import { firebaseApp } from '@/firebase/firebase'
import { getAuth }     from 'firebase/auth'

export const auth = getAuth(firebaseApp)
