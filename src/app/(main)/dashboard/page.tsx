import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Dashboard from './Dashboard'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Личный кабинет',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (
		<div>
			<Dashboard />
		</div>
	)
}
