'use client'

import { statisticsService } from '@/services/statistics.service'

import Heading from '../../heading/Heading'
import styles from './MainStatistics.module.scss'
import StatisticItem from './StatisticItem'
import StatisticItemLoading from './StatisticItemLoading'
import { useQuery } from '@tanstack/react-query'

const MainStatistics = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get main statistics'],
		queryFn: () => statisticsService.getMain()
	})

	return (
		<div>
			<Heading>Статистика</Heading>
			<div className={styles.main_statistics}>
				{isLoading ? (
					Array.from({ length: 4 }).map((_, index) => (
						<StatisticItemLoading key={index} />
					))
				) : data ? (
					data.map(item => <StatisticItem key={item.id} item={item} />)
				) : (
					<div>Статистика отсутствует.</div>
				)}
			</div>
		</div>
	)
}

export default MainStatistics
