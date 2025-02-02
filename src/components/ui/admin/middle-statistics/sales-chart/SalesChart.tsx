import { ISalesByWeek } from '@/types/statistics.types'

import styles from './SalesChart.module.scss'
import SalesTooltip from './SalesChartTooltip'
import {
	Bar,
	BarChart,
	Rectangle,
	ResponsiveContainer,
	Tooltip,
	XAxis
} from 'recharts'

interface ISalesChart {
	data: ISalesByWeek[]
}
const SalesChart: React.FC<ISalesChart> = ({ data }) => {
	return (
		<div className={styles.sales_chart}>
			<ResponsiveContainer width='100%' height={390}>
				<BarChart data={data} width={500} height={300}>
					<XAxis
						tickLine={false}
						dataKey='date'
						axisLine={false}
						style={{ fontSize: 12 }}
						tickMargin={12}
					/>
					<Tooltip
						content={<SalesTooltip />}
						cursor={{ fill: 'transparent' }}
					/>
					<Bar
						dataKey='total'
						fill='#B61C1C'
						activeBar={<Rectangle fill='#9D1C1C' />}
						radius={[7, 7, 7, 7]}
						barSize={36}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default SalesChart
