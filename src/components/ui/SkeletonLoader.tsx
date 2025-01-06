import cn from 'clsx'

interface ISkeletonLoader {
	className?: string
}

const SkeletonLoader: React.FC<ISkeletonLoader> = ({ className }) => {
	return (
		<div className={cn('animate-pulse rounded-lg bg-slate-800', className)} />
	)
}

export default SkeletonLoader
