import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'

import { IMenu } from './menu.interface'

export const userMenu: IMenu = {
	title: 'Меню',
	items: [
		{
			icon: 'LuCompass',
			link: PUBLIC_URL.home(),
			name: 'Главная'
		},
		{
			icon: 'LuClapperboard',
			link: PUBLIC_URL.explorer(),
			name: 'Фильмы'
		},
		{
			icon: 'LuFlame',
			link: PUBLIC_URL.trending(),
			name: 'Популярные'
		}
	]
}

export const adminMenu: IMenu = {
	title: 'Меню',
	items: [
		{
			icon: 'LuLayoutDashboard',
			link: ADMIN_URL.root(),
			name: 'Статистика'
		},
		{
			icon: 'LuTv',
			link: ADMIN_URL.movies(),
			name: 'Фильмы'
		},
		{
			icon: 'LuUsers',
			link: ADMIN_URL.users(),
			name: 'Пользователи'
		},
		{
			icon: 'LuBook',
			link: ADMIN_URL.genres(),
			name: 'Жанры'
		},
		{
			icon: 'LuBookDown',
			link: ADMIN_URL.actors(),
			name: 'Актеры'
		},
		{
			icon: 'LuStar',
			link: ADMIN_URL.reviews(),
			name: 'Отзывы'
		},
		{
			icon: 'LuRussianRuble',
			link: ADMIN_URL.payments(),
			name: 'Платежи'
		}
	]
}
