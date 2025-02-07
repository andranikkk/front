import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Genres from './Genres'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Жанры',
	...NO_INDEX_PAGE
}

export default function GenresPage() {
	return (
		<div>
			<Genres />
		</div>
	)
}
