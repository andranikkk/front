import MainLayout from '@/components/main-layout/MainLayout'

import React, { PropsWithChildren } from 'react'

const Layout: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <MainLayout>{children}</MainLayout>
}

export default Layout
