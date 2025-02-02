import Heading from '../../heading/Heading'
import styles from './MainStatistics.module.scss'
import { IStatisticItem } from './statistic-item-interface'
import { getIcon } from './statistics.util'
import CountUp from 'react-countup'

const StatisticItem: React.FC<{ item: IStatisticItem }> = ({ item }) => {
	const Icon = getIcon(item.id)

	return (
		<div className={styles.item}>
			<div className={styles.header}>
				<p className={styles.name}>{item.name}</p>
				<Icon className={styles.icon} />
			</div>
			<Heading>
				<CountUp end={item.value} />
			</Heading>
		</div>
	)
}

export default StatisticItem
