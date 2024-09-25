'use client'

import Button from '@/components/ui/form-elements/button/Button'
import Heading from '@/components/ui/heading/Heading'

import { IAuthForm } from '@/types/auth.types'

import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import Image from 'next/image'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PiFilmReelFill } from 'react-icons/pi'

const Auth: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IAuthForm>({
		mode: 'onChange'
	})
	const [isLoginForm, setIsLoginForm] = useState(true)

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		console.log(data, 'data')
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Heading>{isLoginForm ? 'Авторизация' : 'Регистрация'}</Heading>
				<form onSubmit={handleSubmit(onSubmit)}>
					<AuthFields
						register={register}
						errors={errors}
						isLoginForm={isLoginForm}
					/>
					<Button className={styles.button}>
						{isLoginForm ? 'Войти' : 'Зарегистрироваться'}
					</Button>
					<button
						type='button'
						onClick={() => setIsLoginForm(isLoginForm ? false : true)}
						className='text-red-500'
					>
						{isLoginForm ? 'Зарегистрироваться' : 'Войти'}
					</button>
				</form>
			</div>
			<div className={styles.right}>
				<PiFilmReelFill size={150} fill='red' />
			</div>
		</div>
	)
}

export default Auth
