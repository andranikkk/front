import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'

import { useDebounce } from '@/hooks/useDebounce'

import { genreService } from '@/services/genre.service'

import { IListItem } from '../../../../components/ui/admin/admin-table/admin-list/admin-list.interface'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

export const useAdminGenres = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const queryClient = useQueryClient()

	const { isLoading, data: genres } = useQuery({
		queryKey: ['get genres for admin dashboard', debounceSearch],
		queryFn: () => genreService.getAll(debounceSearch),
		select: data =>
			data.map(
				(genre): IListItem => ({
					id: genre.id,
					viewUrl: PUBLIC_URL.genre(genre.slug),
					editUrl: ADMIN_URL.genreEdit(genre.id),
					items: [genre.name, genre.slug]
				})
			)
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete genre'],
		mutationFn: (genreId: string) => genreService.delete(genreId),
		onSuccess() {
			toast.success('Фильм удален')
			queryClient.invalidateQueries({
				queryKey: ['get genres for admin dashboard']
			})
		},
		onError() {
			toast.error('Произошла ошибка при удалении жанра')
		}
	})

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['create genre'],
		mutationFn: () => genreService.create(),
		onSuccess({ data: id }) {
			toast.success('Жанр добавлен')
			push(ADMIN_URL.genreEdit(id))
			queryClient.invalidateQueries({
				queryKey: ['get genres for admin dashboard']
			})
		},
		onError() {
			toast.error('Произошла ошибка при добавлении жанра')
		}
	})

	return useMemo(
		() => ({
			handleSearch,
			isLoading,
			genres,
			searchTerm,
			deleteAsync,
			createAsync
		}),
		[handleSearch, isLoading, genres, searchTerm, deleteAsync, createAsync]
	)
}
