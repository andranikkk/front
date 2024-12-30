import { PUBLIC_URL } from '@/config/url.config'

import styles from './Logo.module.scss'
import cn from 'clsx'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const font = Poppins({
	subsets: ['latin'],
	weight: ['600']
})

const Logo: React.FC = () => {
	return (
		<Link href={PUBLIC_URL.home()} className={styles.logo}>
			<Image src='/images/logo.png' alt='CinemaHub' width={50} height={50} />
			<div
				className={cn(
					'font-semibold text-2xl text-green-300',
					font.className
				)}
			>
				Cinema<span className='text-purple-300'>Hub</span>
			</div>
		</Link>
	)
}

export default Logo
