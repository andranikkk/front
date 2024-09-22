import Auth from './Auth'
import { Metadata } from 'next'
import React from 'react'

export const metedata: Metadata = {
	title: 'Авторизация'
}
export default function AuthPage() {
	return (
		<div>
			<Auth />
		</div>
	)
}
