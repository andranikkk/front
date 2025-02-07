import { useDebounce } from '@/hooks/useDebounce'

import { movieService } from '@/services/movie.service'

import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useState } from 'react'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery({
		queryKey: ['search', debounceSearch],
		queryFn: () => movieService.getAll(debounceSearch),
		enabled: !!debounceSearch
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { isSuccess, handleSearch, data, searchTerm }
}
