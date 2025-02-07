'use client'

import Icon from '@/components/ui/Icon'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'
import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuItem: React.FC<{ item: IMenuItem }> = ({ item }) => {
	const pathname = usePathname()

	return (
		<Link
			href={item.link}
			className={cn(styles.item, {
				[styles.active]: pathname === item.link
			})}
		>
			<Icon name={item.icon} className={styles.icon} />
			{item.name}
		</Link>
	)
}

export default MenuItem
