import { EvenioGroup } from '@/types/group'
import { getGroupById } from '@/database/groups'
import NotFound from '@/app/not-found'

export default async function GroupPage({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug

	let group: EvenioGroup | null = null

	await getGroupById(slug)
		.then(g => group = g)
		.catch(error => console.error(error))
		.finally(() => {
			return
		})

	if (!group) {
		return <NotFound />
	}

	return (
		<main>
			<h2>Group</h2>

			<p>{group['name']}</p>
		</main>
	)
}