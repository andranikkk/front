'use client'

import Button from '@/components/ui/form-elements/button/Button'

import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'

import { useProfile } from '@/hooks/useProfile'

import styles from './Subscribe.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Subscribe: React.FC = () => {
	const { user } = useProfile()
	const pathname = usePathname()

	const isAdminPage = pathname?.includes(ADMIN_URL.root())

	return (
		!isAdminPage && (
			<div className={styles.subscribe}>
				<h2>
					{user?.isHasPremium
						? 'У вас есть премиум'
						: 'Подпишитесь на премиум'}
				</h2>
				<p>
					{user?.isHasPremium
						? 'Спасибо за подписку! ;)'
						: 'Подпишитесь на премиум и получите доступ к платным фильмам'}
				</p>
				<Link
					href={
						user?.isHasPremium
							? PUBLIC_URL.explorer()
							: PUBLIC_URL.premium()
					}
				>
					<Button size='sm' className={styles.button}>
						{user?.isHasPremium
							? 'Перейти в кинотеатр'
							: 'Оформить премиум'}
					</Button>
				</Link>
			</div>
		)
	)
}

export default Subscribe
