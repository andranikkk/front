import { useGenresMenu } from './useGenresMenu'
import React from 'react'

const GenreMenu: React.FC = () => {
	const { data, isLoading } = useGenresMenu()
	console.log(data, '><<<<><><><>')

	return <div>GenreMenu</div>
}

export default GenreMenu
