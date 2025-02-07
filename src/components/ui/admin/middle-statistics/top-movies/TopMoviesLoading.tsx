import Loader from '@/components/ui/Loader'

import styles from './TopMovies.module.scss'

const TopMoviesLoading: React.FC = () => {
	return (
		<div className={styles.top_movies}>
			<div className='h-[390px] w-full flex items-center justify-center'>
				<Loader />
			</div>
		</div>
	)
}

export default TopMoviesLoading
