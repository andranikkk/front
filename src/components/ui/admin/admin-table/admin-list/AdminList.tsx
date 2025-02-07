import SkeletonLoader from '@/components/ui/SkeletonLoader'

import styles from './AdminList.module.scss'
import AdminListHeader from './AdminListHeader'
import AdminListItem from './AdminListItem'
import { IListItem } from './admin-list.interface'

interface IAdminList {
	listItems: IListItem[]
	headerItems: string[]
	isLoading: boolean
	removeHandler?: (id: string) => void
}
const AdminList: React.FC<IAdminList> = ({
	headerItems,
	listItems,
	isLoading,
	removeHandler
}) => {
	return (
		<div className='mb-12'>
			<AdminListHeader headerItems={headerItems} />

			{isLoading ? (
				<div className={styles.loading}>
					{Array.from({ length: 5 }).map((_, index) => (
						<SkeletonLoader key={index} className='h-11 w-full' />
					))}
				</div>
			) : listItems.length ? (
				listItems.map(item => (
					<AdminListItem
						key={item.id}
						listItem={item}
						removeHandler={
							removeHandler ? () => removeHandler(item.id) : undefined
						}
					/>
				))
			) : (
				<div className={styles.not_found}>Ничего не найдено</div>
			)}
		</div>
	)
}

export default AdminList
