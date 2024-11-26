import { EvenioGroup }  from '@/types/group'
import { getAllGroups } from '@/database/groups'
import NotFound         from '@/app/not-found'
import Link             from 'next/link'

export default async function GroupsPage() {
	let groups: EvenioGroup[] = []

	await getAllGroups()
		.then(g => groups = g)
		.catch(error => console.error(error))
		.finally(() => {
			return
		})

	if (groups.length === 0) {
		return <NotFound />
	}

	return (
		<main>
			<h2>Groups</h2>

			{groups.map(group => <Link key={group.id} href={`/groups/${group.id}`}>{group.name}</Link>)}
		</main>
	)
}