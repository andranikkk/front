'use client'

import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/form-elements/button/Button'

import { ADMIN_URL, DASHBOARD_URL, PUBLIC_URL } from '@/config/url.config'

import { useProfile } from '@/hooks/useProfile'

import { UserRole } from '@/types/user.types'

import styles from './UserMenu.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'
import { LuLoader } from 'react-icons/lu'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

const UserMenu: React.FC = () => {
	const { user, isLoading } = useProfile()

	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				<LuLoader className={styles.loader} />
			) : user ? (
				<div className={styles.menu}>
					{user.role === UserRole.ADMIN && (
						<Link href={ADMIN_URL.root()}>
							<MdOutlineAdminPanelSettings className={styles.icon} />
						</Link>
					)}
					<Link href={DASHBOARD_URL.favorites()}>
						<AiOutlineHeart className={styles.icon} />
					</Link>
					<Link href={DASHBOARD_URL.root()}>
						<Image
							src={user.avatarPath}
							alt={user.name}
							height={40}
							width={30}
							className={styles.avatar}
						/>
					</Link>
				</div>
			) : (
				<Link href={PUBLIC_URL.auth()} className='px-4'>
					<Button variant='outline'>
						<Icon name='LuLogOut' className='size-4 mr-2' />
						Войти
					</Button>
				</Link>
			)}
		</div>
	)
}

export default UserMenu
