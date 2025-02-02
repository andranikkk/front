import SkeletonLoader from '../../SkeletonLoader'
import styles from './MainStatistics.module.scss'

const StatisticItemLoading: React.FC = () => {
	return (
		<div className={styles.item}>
			<div className={styles.header}>
				<SkeletonLoader className='w-22 h-5' />
				<SkeletonLoader className={styles.icon} />
			</div>
			<SkeletonLoader className='w-16 h-7 mt-2' />
		</div>
	)
}

export default StatisticItemLoading
