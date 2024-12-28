import { PUBLIC_URL } from '@/config/url.config'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import styles from './NotFoundPage.module.scss'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Страница не найдена',
	...NO_INDEX_PAGE
}

export default function NotFoundPage() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.area}>
				<h1>Страница не найдена.</h1>
				<p>Упс, похоже такой страницы не существует.</p>
				<Link href={PUBLIC_URL.home()} className={styles.link}>
					Вернуться на главную
				</Link>
			</div>
		</div>
	)
}
