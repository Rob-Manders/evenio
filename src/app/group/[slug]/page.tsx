export default async function GroupPage({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug

	return (
		<main>
			<h2>Group</h2>

			<p>{slug}</p>
		</main>
	)
}