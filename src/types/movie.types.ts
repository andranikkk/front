import { IActor } from './actor.types'
import { IGenre } from './genre.types'

export interface IMovie {
	id: string
	poster: string
	bigPoster: string
	title: string
	slug: string
	videoUrl: string
	reviews: number
	actors: IActor[]
	genres: IGenre[]
	duration: number
	year: number
	country: string
	views: number
}

export interface IMovieEditInput
	extends Omit<IMovie, 'id' | 'views' | 'reviews' | 'genres' | 'actors'> {
	genres: string[]
	actors: string[]
}
