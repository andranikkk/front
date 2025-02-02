import { convertPrice } from '@/utils/string/convertPrice'

import styles from '../MiddleStatistics.module.scss'

interface ISalesTooltip {
	active?: boolean
	payload?: any[]
	label?: string
}
const SalesTooltip: React.FC<ISalesTooltip> = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className={styles.tooltip}>
				<p className={styles.title}>{label}</p>
				<p className={styles.value}>
					Продажи:
					<span className='ml-2'>{convertPrice(payload[0].value)}</span>
				</p>
			</div>
		)
	}
}

export default SalesTooltip
