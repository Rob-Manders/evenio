import { EvenioEvent }                                from '@/types/event'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { database }                                   from '@/firebase'

export async function getCurrentEvents(): Promise<EvenioEvent[]> {
	const ref = collection(database, 'events')
	const q = query(ref, where('date', '>=', Date.now()), orderBy('date', 'asc'))

	const snapshot = await getDocs(q)
	const docs = snapshot.docs.map((doc) => doc.data())

	return docs.map(doc => {
		const event: EvenioEvent = {
			id: doc.id,
			dateCreated: doc.dateCreated,
			dateModified: doc.dateModified,
			date: doc.date,
			name: doc.name,
			description: doc.description,
			group: doc.group,
			organiser: doc.organiser
		}

		return event
	})
}
