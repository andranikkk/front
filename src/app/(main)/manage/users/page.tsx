import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import Users from './Users'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Пользователи',
	...NO_INDEX_PAGE
}

export default function UsersPage() {
	return (
		<div>
			<Users />
		</div>
	)
}
