import { EvenioEvent } from '@/types/event'
import { getEventById } from '@/database/events'
import NotFound from '@/app/not-found'

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id

	let event: EvenioEvent | null = null

	await getEventById(id)
		.then(e => event = e)
		.catch(error => console.error(error))
		.finally(() => {
			return
		})

	if (!event) {
		return <NotFound />
	}

	return (
		<main>
			<h2>Event</h2>

			<p>{id}</p>
		</main>
	)
}