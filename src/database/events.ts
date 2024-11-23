import { EvenioEvent }                                             from '@/types/event'
import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore'
import { database }                                                from '@/firebase'

const EVENTS_COLLECTION = 'events'

export async function getCurrentEvents(): Promise<EvenioEvent[]> {
	const ref = collection(database, EVENTS_COLLECTION)
	const q = query(ref, where('date', '>=', Date.now()), orderBy('date', 'asc'))

	const snapshot = await getDocs(q)
	const docs = snapshot.docs.map((doc) => doc.data())

	return docs.map(data => {
		const event: EvenioEvent = {
			id: data.id,
			dateCreated: data.dateCreated,
			dateModified: data.dateModified,
			date: data.date,
			name: data.name,
			description: data.description,
			group: data.group,
			organiser: data.organiser
		}

		return event
	})
}

export async function getEventById(id: string): Promise<EvenioEvent | null> {
	const ref = doc(database, EVENTS_COLLECTION, id)
	const snapshot = await getDoc(ref)

	if (!snapshot.exists()) return null

	const data = snapshot.data()

	return {
		id: data.id,
		dateCreated: data.dateCreated,
		dateModified: data.dateModified,
		date: data.date,
		name: data.name,
		description: data.description,
		group: data.group,
		organiser: data.organiser
	}
}
