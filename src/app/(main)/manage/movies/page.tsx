import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Movies from './Movies'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Фильмы',
	...NO_INDEX_PAGE
}

export default function MoviesPage() {
	return (
		<div>
			<Movies />
		</div>
	)
}
