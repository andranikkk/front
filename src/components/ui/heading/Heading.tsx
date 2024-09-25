import cn from 'clsx'
import { PropsWithChildren } from 'react'

interface IHeading {
	className?: string
}

const Heading: React.FC<PropsWithChildren<IHeading>> = ({
	children,
	className
}) => {
	return (
		<h1 className={cn('text-2xl font-semibold', className)}>{children}</h1>
	)
}

export default Heading
