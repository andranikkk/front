import MainStatistics from '@/components/ui/admin/main-statistics/MainStatistics'
import MiddleStatistics from '@/components/ui/admin/middle-statistics/MiddleStatistics'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Админ панель',
	...NO_INDEX_PAGE
}

export default function AdminPage() {
	return (
		<div className='px-6'>
			<MainStatistics />
			<MiddleStatistics />
		</div>
	)
}
