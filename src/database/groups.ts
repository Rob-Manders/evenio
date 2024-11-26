import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore'
import { database }                                                from '@/firebase'
import { EvenioGroup, EvenioGroupID }                              from '@/types/group'

const GROUPS_COLLECTION = 'groups'

export async function getAllGroups(): Promise<EvenioGroup[]> {
	const ref = collection(database, GROUPS_COLLECTION)
	const q = query(ref, where('suspended', '==', false), orderBy('name', 'asc'))

	const snapshot = await getDocs(q)

	return snapshot.docs.map((document): EvenioGroup => {
		const data = document.data()

		return {
			id: document.id,
			dateCreated: data.dateCreated,
			name: data.name,
			description: data.description,
			admins: data.admins,
			organisers: data.organisers,
			contactEmail: data.contactEmail
		}
	})
}

export async function getGroupById(id: EvenioGroupID): Promise<EvenioGroup | null> {
	const ref = doc(database, GROUPS_COLLECTION, id)
	const snapshot = await getDoc(ref)

	if (!snapshot.exists()) {
		return null
	}

	const data = snapshot.data()

	if (data.suspended) {
		return null
	}

	return {
		id: snapshot.id,
		dateCreated: data.dateCreated.seconds,
		name: data.name,
		description: data.description,
		admins: data.admins,
		organisers: data.organisers,
		contactEmail: data.contactEmail
	}
}
