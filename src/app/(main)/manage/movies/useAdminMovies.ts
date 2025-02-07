import { IListItem } from '@/components/ui/admin/admin-table/admin-list/admin-list.interface'

import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'

import { useDebounce } from '@/hooks/useDebounce'

import { movieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

export const useAdminMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const queryClient = useQueryClient()

	const { isLoading, data: movies } = useQuery({
		queryKey: ['get movies for admin dashboard', debounceSearch],
		queryFn: () => movieService.getAll(debounceSearch),
		select: data =>
			data.map(
				(movie): IListItem => ({
					id: movie.id,
					viewUrl: PUBLIC_URL.movie(movie.slug),
					editUrl: ADMIN_URL.movieEdit(movie.id),
					items: [
						movie.title,
						getGenresList(movie.genres),
						String(movie.views)
					]
				})
			)
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete movie'],
		mutationFn: (movieId: string) => movieService.delete(movieId),
		onSuccess() {
			toast.success('Фильм удален')
			queryClient.invalidateQueries({
				queryKey: ['get movies for admin dashboard']
			})
		},
		onError() {
			toast.error('Произошла ошибка при удалении фильма')
		}
	})

	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['create movie'],
		mutationFn: () => movieService.create(),
		onSuccess({ data: id }) {
			toast.success('Фильм добавлен')
			push(ADMIN_URL.movieEdit(id))
			queryClient.invalidateQueries({
				queryKey: ['get movies for admin dashboard']
			})
		},
		onError() {
			toast.error('Произошла ошибка при добавлении фильма')
		}
	})

	return useMemo(
		() => ({
			handleSearch,
			isLoading,
			movies,
			searchTerm,
			deleteAsync,
			createAsync
		}),
		[handleSearch, isLoading, movies, searchTerm, deleteAsync, createAsync]
	)
}
