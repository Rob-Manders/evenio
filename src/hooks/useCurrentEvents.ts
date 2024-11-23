import { EvenioEvent }      from '@/types/event'
import { getCurrentEvents } from '@/database/events'

export default function useCurrentEvents(): EvenioEvent[] {
	let events: EvenioEvent[] = []

	getCurrentEvents()
		.then((e: EvenioEvent[]) => {
			events = e
		})
		.catch(error => console.error(error))

	return events
}