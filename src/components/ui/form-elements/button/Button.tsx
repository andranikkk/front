import { IButton } from '../form.interface'
import styles from './Button.module.scss'
import cn from 'clsx'
import React from 'react'

const Button: React.FC<IButton> = ({
	children,
	className,
	variant = 'default',
	size = 'md',
	...rest
}) => {
	return (
		<button
			className={cn(
				styles.button,
				className,
				size === 'sm' && 'rounded-lg px-4',
				size === 'md' && 'text-sm rounded-md',
				{
					[styles.default]: variant === 'default',
					[styles.outline]: variant === 'outline'
				}
			)}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
