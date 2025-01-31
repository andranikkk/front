import styles from './Header.module.scss'
import Search from './Search/Search'
import UserMenu from './user-menu/UserMenu'

const Header: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Search />
				<UserMenu />
			</div>
		</div>
	)
}

export default Header
