'use client'

import { ADMIN_URL } from '@/config/url.config'

import Menu from './Menu'
import styles from './Menu.module.scss'
import GenreMenu from './genre-menu/GenreMenu'
import { adminMenu, userMenu } from './menu.data'
import { usePathname } from 'next/navigation'
import React from 'react'

const MenuContainer = () => {
	const pathname = usePathname()

	const menu = 'Меню'
	const popularGenres = 'Популярные жанры'

	const isAdminPage = pathname?.includes(ADMIN_URL.root())
	return (
		<div className='flex flex-col w-full flex-1'>
			<div className={styles.heading}>{!isAdminPage && popularGenres}</div>

			<Menu menu={isAdminPage ? adminMenu : userMenu} />
			{!isAdminPage && <GenreMenu />}
		</div>
	)
}

export default MenuContainer
