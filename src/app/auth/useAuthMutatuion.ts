import { DASHBOARD_URL } from '@/config/url.config'

import { authService } from '@/services/auth/auth.service'

import { IAuthForm } from '@/types/auth.types'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { UseFormReset } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useAuthMutation = (
	isLoginForm: boolean,
	reset: UseFormReset<IAuthForm>
) => {
	const { push, refresh } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Вы успешно вошли в аккаунт!')
			reset()
			push(DASHBOARD_URL.root())
			refresh()
		},
		onError(error: any) {
			if (
				error.response &&
				error.response.data.message &&
				error.response.data
			) {
				toast.error(error.response.data.message)
			} else {
				toast.error('Произошла ошибка при авторизации')
			}
		}
	})

	return { mutate }
}
