'use client'

import AdminHeader from '@/components/ui/admin/admin-table/admin-header/AdminHeader'
import Heading from '@/components/ui/heading/Heading'

import { useAdminUsers } from './useAdminUsers'

const Users: React.FC = () => {
	const { handleSearch, isLoading, users, searchTerm, deleteAsync } =
		useAdminUsers()

	return (
		<div className='px-6'>
			<Heading>
				<AdminHeader
					// onClick={deleteAsync}
					handleSearch={handleSearch}
					searchTerm={searchTerm}
				/>
			</Heading>
		</div>
	)
}

export default Users
