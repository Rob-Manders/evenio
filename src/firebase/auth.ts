import { firebaseApp }                 from '@/firebase/firebase'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

export const auth = getAuth(firebaseApp)
export const googleAuthProvider = new GoogleAuthProvider()