import styles from './AdminList.module.scss'
import AdminActions from './admin-actions/AdminActions'
import { IAdminListItem } from './admin-list.interface'

const AdminListItem: React.FC<IAdminListItem> = ({
	listItem,
	removeHandler
}) => {
	return (
		<div className={styles.item}>
			{listItem.items.map(item => (
				<div key={item}>{item}</div>
			))}

			<AdminActions
				viewUrl={listItem.viewUrl}
				editUrl={listItem.editUrl}
				removeHandler={removeHandler}
			/>
		</div>
	)
}

export default AdminListItem
