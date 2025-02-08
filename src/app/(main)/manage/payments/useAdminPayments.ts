import { IListItem } from '@/components/ui/admin/admin-table/admin-list/admin-list.interface'

import { paymentService } from '@/services/payment.service'

import { PaymentStatus } from '@/types/payment.types'

import { getNameAndEmail } from '@/utils/genre/getNameAndEmail'
import { formatDate } from '@/utils/payment/formatDate'
import { convertPrice } from '@/utils/string/convertPrice'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export const useAdminPayments = () => {
	const queryClient = useQueryClient()

	const { isLoading, data: payments } = useQuery({
		queryKey: ['get payments for admin dashboard'],
		queryFn: () => paymentService.getAll(),
		select: data =>
			data.map(
				(payment): IListItem => ({
					id: payment.id,
					items: [
						payment.status === PaymentStatus.PENDING
							? 'Ожидает оплаты'
							: 'Оплачен',
						formatDate(payment.createdAt),
						convertPrice(payment.amount)
					]
				})
			)
	})

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete payment'],
		mutationFn: (paymentId: string) => paymentService.delete(paymentId),
		onSuccess() {
			toast.success('Отзыв удален')
			queryClient.invalidateQueries({
				queryKey: ['get payments for admin dashboard']
			})
		},
		onError() {
			toast.error('Произошла ошибка при удалении платежа')
		}
	})

	return useMemo(
		() => ({
			isLoading,
			payments,
			deleteAsync
		}),
		[isLoading, payments, deleteAsync]
	)
}
