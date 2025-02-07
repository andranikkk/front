'use client'

import AdminList from '@/components/ui/admin/admin-table/admin-list/AdminList'
import Heading from '@/components/ui/heading/Heading'

import { useAdminReviews } from './useAdminReviews'

const Reviews: React.FC = () => {
	const { isLoading, reviews, deleteAsync } = useAdminReviews()

	return (
		<div className='px-6'>
			<Heading>Отзывы</Heading>

			<AdminList
				listItems={reviews || []}
				headerItems={['Рейтинг', 'Имя и почта пользователя', 'Фильм']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</div>
	)
}

export default Reviews
