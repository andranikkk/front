import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Payments from './Payments'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Платежи',
	...NO_INDEX_PAGE
}

export default function ReviewsPage() {
	return (
		<div>
			<Payments />
		</div>
	)
}
