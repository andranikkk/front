'use client'

import Icon from '@/components/ui/Icon'

import { IListItem } from '../admin-list.interface'
import styles from './AdminActions.module.scss'
import { useRouter } from 'next/navigation'

interface IAdminActions extends Pick<IListItem, 'editUrl' | 'viewUrl'> {
	removeHandler?: () => void
}

const AdminActions: React.FC<IAdminActions> = ({
	removeHandler,
	editUrl,
	viewUrl
}) => {
	const { push } = useRouter()

	return (
		<div className={styles.actions}>
			{viewUrl && (
				<button onClick={() => push(viewUrl)}>
					<Icon name='LuExternalLink' />
				</button>
			)}
			{editUrl && (
				<button onClick={() => push(editUrl)}>
					<Icon name='LuPencil' />
				</button>
			)}
			{removeHandler && (
				<button onClick={removeHandler}>
					<Icon name='LuTrash' />
				</button>
			)}
		</div>
	)
}

export default AdminActions
