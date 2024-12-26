import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Админ панель',
	...NO_INDEX_PAGE
}

export default function AdminPage() {
	return <div>AdminPage</div>
}
