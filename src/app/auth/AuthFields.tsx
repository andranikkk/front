import Field from '@/components/ui/form-elements/field/Field'

import { IAuthForm } from '@/types/auth.types'

import { validEmail } from './valid-email'
import React from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

interface IAuthFields {
	register: UseFormRegister<IAuthForm>
	errors: {
		name?: FieldError
		email?: FieldError
		password?: FieldError
	}
	isLoginForm: boolean
}

const AuthFields: React.FC<IAuthFields> = ({
	register,
	errors,
	isLoginForm
}) => {
	return (
		<>
			{!isLoginForm && (
				<Field
					{...register('name', {
						required: 'Имя не может быть пустым',
						minLength: {
							value: 1,
							message: 'Пожалуйста, введите имя'
						}
					})}
					placeholder='Имя'
					error={errors.name}
				/>
			)}
			<Field
				{...register('email', {
					required: 'Email обязателен',
					pattern: {
						value: validEmail,
						message: 'Пожалуйста, введите Email'
					}
				})}
				placeholder='Email'
				error={errors.email}
			/>

			<Field
				{...register('password', {
					required: 'Пароль обязателен',
					minLength: {
						value: 3,
						message: 'Пожалуйста, введите пароль, мин. 3 символа'
					}
				})}
				placeholder='Пароль'
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
