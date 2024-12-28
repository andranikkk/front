import styles from './MainLayout.module.scss'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import React, { PropsWithChildren } from 'react'

const MainLayout: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<div className='flex-1'>
				<Header />
				<Sidebar />
				<main>{children}</main>
			</div>
		</div>
	)
}

export default MainLayout
