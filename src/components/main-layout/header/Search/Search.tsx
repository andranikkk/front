'use client'

import SearchField from '@/components/ui/search-field/SearchField'

import styles from './Search.module.scss'
import SearchList from './search-list/SearchList'
import { useSearch } from './useSearch'
import React from 'react'

export default function Search() {
	const { handleSearch, isSuccess, searchTerm, data } = useSearch()
	return (
		<div className={styles.search}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}
