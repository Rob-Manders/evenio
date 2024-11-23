import { firebaseApp }  from '@/firebase/firebase'
import { getFirestore } from 'firebase/firestore'

export const database = getFirestore(firebaseApp)

