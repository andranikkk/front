'use client'

import { ADMIN_URL } from '@/config/url.config'

import Menu from './Menu'
import GenreMenu from './genre-menu/GenreMenu'
import { adminMenu, userMenu } from './menu.data'
import { usePathname } from 'next/navigation'
import React from 'react'

const MenuContainer = () => {
	const pathname = usePathname()

	const isAdminPage = pathname?.includes(ADMIN_URL.root())
	return (
		<div className='flex flex-col w-full flex-1'>
			<div className='text-gray-500 uppercase text-sm font-semibold'>
				Меню
			</div>

			<Menu menu={isAdminPage ? adminMenu : userMenu} />
			{!isAdminPage && (
				<>
					<div className='text-gray-500 uppercase text-sm font-semibold'>
						Популярные жанры
					</div>
					<GenreMenu />
				</>
			)}
		</div>
	)
}

export default MenuContainer
