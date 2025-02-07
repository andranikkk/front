import styles from './AdminList.module.scss'
import cn from 'clsx'

interface IAdminListHeader {
	headerItems: string[]
}
const AdminListHeader: React.FC<IAdminListHeader> = ({ headerItems }) => {
	return (
		<div className={cn(styles.item, styles.item_header)}>
			{headerItems.map(item => (
				<div key={item}>{item}</div>
			))}

			<div>Действия</div>
		</div>
	)
}

export default AdminListHeader
