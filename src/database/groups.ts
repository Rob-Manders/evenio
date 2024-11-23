import { collection, getDocs, query, where } from 'firebase/firestore'
import { database }                          from '@/firebase'
import { EvenioGroup }                       from '@/types/group'

export async function getAllGroups(): Promise<EvenioGroup[]> {
	const ref = collection(database, 'groups')
	const q = query(ref, where('suspended', '==', false))

	const snapshot = await getDocs(q)
	const docs = snapshot.docs.map(doc => doc.data())

	return docs.map(doc => {
		const group: EvenioGroup = {
			id: doc.id,
			dateCreated: doc.dateCreated,
			name: doc.name,
			description: doc.description
		}

		return group
	})
}
