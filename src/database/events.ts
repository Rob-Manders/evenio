import { EvenioEvent, EvenioEventID }                                          from '@/types/event'
import { collection, doc, documentId, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore'
import { database }                                                            from '@/firebase'
import { EvenioGroupID }                                                       from '@/types/group'

const EVENTS_COLLECTION = 'events'

export async function getCurrentEvents(): Promise<EvenioEvent[]> {
	const ref = collection(database, EVENTS_COLLECTION)
	const q = query(ref, where('date', '>=', Date.now()), orderBy('date', 'asc'))

	const snapshot = await getDocs(q)

	return snapshot.docs.map(document => {
		const data = document.data()

		const event: EvenioEvent = {
			id: document.id,
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

export async function getEventById(id: EvenioEventID): Promise<EvenioEvent | null> {
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

export async function getEventsForGroup(groupId: EvenioGroupID): Promise<EvenioEvent[]> {
	const ref = collection(database, EVENTS_COLLECTION)
	const q = query(ref, where(documentId(), '==', groupId), where('date', '>=', Date.now()), orderBy('date', 'asc'))

	const snapshot = await getDocs(q)

	return snapshot.docs.map(document => {
		const data = document.data()

		const event: EvenioEvent = {
			id: document.id,
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
