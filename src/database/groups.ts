import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { database }                                       from '@/firebase'
import { EvenioGroup, EvenioGroupID }                     from '@/types/group'

const GROUPS_COLLECTION = 'groups'

export async function getAllGroups(): Promise<EvenioGroup[]> {
	const ref = collection(database, GROUPS_COLLECTION)
	const q = query(ref, where('suspended', '==', false))

	const snapshot = await getDocs(q)
	const docs = snapshot.docs.map(doc => doc.data())

	return docs.map((data): EvenioGroup => {
		return {
			id: data.id,
			dateCreated: data.dateCreated,
			name: data.name,
			description: data.description,
			admins: data.admins,
			organisers: data.organisers,
			contactEmail: data.contactEmail,
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
		contactEmail: data.contactEmail,
	}
}
