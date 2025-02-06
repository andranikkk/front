import SearchField from '@/components/ui/search-field/SearchField'

import AdminCreateButton from './AdminCreateButton'
import styles from './AdminHeader.module.scss'

interface IAdminHeader {
	onClick?: () => void
	searchTerm: string
	handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const AdminHeader: React.FC<IAdminHeader> = ({
	handleSearch,
	searchTerm,
	onClick
}) => {
	return (
		<div className={styles.header}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}

export default AdminHeader
