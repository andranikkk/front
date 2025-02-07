import { IListItem } from '@/components/ui/admin/admin-table/admin-list/admin-list.interface'

import { reviewService } from '@/services/review.service'

import { getNameAndEmail } from '@/utils/movie/getNameAndEmail'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export const useAdminReviews = () => {
	const queryClient = useQueryClient()

	const { isLoading, data: reviews } = useQuery({
		queryKey: ['get reviews for admin dashboard'],
		queryFn: () => reviewService.getAll(),
		select: data =>
			data.map((review): IListItem => {
				console.log(review, 'review')

				return {
					id: review.id,
					items: [
						Array.from({ length: review.rating })
							.map(() => '🌟')
							.join(' '),
						getNameAndEmail(review.user.name, review.user.email),
						review.movie.title
					]
				}
			})
	})

	console.log(reviews, 'reviews ,><><><><><>')

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete review'],
		mutationFn: (reviewId: string) => reviewService.delete(reviewId),
		onSuccess() {
			toast.success('Отзыв удален')
			queryClient.invalidateQueries({
				queryKey: ['get reviews for admin dashboard']
			})
		},
		onError() {
			toast.error('Произошла ошибка при удалении отзыва')
		}
	})

	return useMemo(
		() => ({
			isLoading,
			reviews,
			deleteAsync
		}),
		[isLoading, reviews, deleteAsync]
	)
}
