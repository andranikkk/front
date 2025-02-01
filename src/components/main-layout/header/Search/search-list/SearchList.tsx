import { PUBLIC_URL } from '@/config/url.config'

import { IMovie } from '@/types/movie.types'

import styles from './SearchList.module.scss'
import { NextConfig } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface ISearchList {
	movies: IMovie[]
}

const SearchList: React.FC<ISearchList> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map(movie => (
					<Link
						className={styles.item}
						href={PUBLIC_URL.movie(movie.slug)}
						key={movie.id}
					>
						<Image
							src={movie.poster}
							width={80}
							height={90}
							alt={movie.title}
							objectFit='cover'
							objectPosition='top'
							className='rounded-md'
						/>
					</Link>
				))
			) : (
				<div className={styles.notFound}>Ничего не найдено.</div>
			)}
		</div>
	)
}

export default SearchList
