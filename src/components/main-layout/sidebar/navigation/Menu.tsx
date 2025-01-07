import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'
import React from 'react'

const Menu: React.FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.items}>
				{items.length ? (
					items.map(item => <MenuItem key={item.link} item={item} />)
				) : (
					<div>Элементы отсутствуют.</div>
				)}
			</div>
		</div>
	)
}

export default Menu
