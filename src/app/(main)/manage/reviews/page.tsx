import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Reviews from './Reviews'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Отзывы',
	...NO_INDEX_PAGE
}

export default function ReviewsPage() {
	return (
		<div>
			<Reviews />
		</div>
	)
}
