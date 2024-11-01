import { SearchBar } from '@/components/elements'

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ query: string }> }) {
	const query = (await searchParams).query

	return (
		<main>
			<SearchBar />

			<p>{query}</p>
		</main>
	)
}