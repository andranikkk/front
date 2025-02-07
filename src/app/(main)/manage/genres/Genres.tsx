'use client'

import AdminHeader from '@/components/ui/admin/admin-table/admin-header/AdminHeader'
import AdminList from '@/components/ui/admin/admin-table/admin-list/AdminList'
import Heading from '@/components/ui/heading/Heading'

import { useAdminGenres } from './useAdminGenres'

const Genres: React.FC = () => {
	const {
		handleSearch,
		isLoading,
		genres,
		searchTerm,
		deleteAsync,
		createAsync
	} = useAdminGenres()

	return (
		<div className='px-6'>
			<Heading>Жанры</Heading>

			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>

			<AdminList
				listItems={genres || []}
				headerItems={['Название', 'Ссылка']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</div>
	)
}

export default Genres
