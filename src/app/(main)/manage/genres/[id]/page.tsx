import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { IPageIdParam } from '@/types/page-params.types'

import GenreEdit from './GenreEdit'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Настройка жанра',
	...NO_INDEX_PAGE
}

export default function GenreEditPage({ params }: IPageIdParam) {
	return (
		<div>
			<GenreEdit genreId={params.id} />
		</div>
	)
}
