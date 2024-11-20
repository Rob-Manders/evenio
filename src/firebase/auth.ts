import { firebaseApp }                                                           from '@/firebase/firebase'
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'

export const auth = getAuth(firebaseApp)

export const facebookAuthProvider = new FacebookAuthProvider()
export const githubAuthProvider = new GithubAuthProvider()
export const googleAuthProvider = new GoogleAuthProvider()