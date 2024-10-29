export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id

	return (
		<main>
			<h2>Event</h2>

			<p>{id}</p>
		</main>
	)
}