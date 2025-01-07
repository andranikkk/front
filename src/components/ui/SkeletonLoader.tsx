import cn from 'clsx'

interface ISkeletonLoader {
	className?: string
}

const SkeletonLoader: React.FC<ISkeletonLoader> = ({ className }) => {
	return (
		<div
			className={cn(
				'animate-pulse rounded-lg bg-gray-700 w-44 h-9',
				className
			)}
		/>
	)
}

export default SkeletonLoader
