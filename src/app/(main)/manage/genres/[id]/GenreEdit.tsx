'use client'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import formStyles from '@/components/ui/form-elements/AdminForm.module.scss'
import Button from '@/components/ui/form-elements/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import Heading from '@/components/ui/heading/Heading'

import { IGenreEditInput } from '@/types/genre.types'

import { useGenreEdit } from './useGenreEdit'
import { useForm } from 'react-hook-form'

interface IGenreEdit {
	genreId: string
}

const GenreEdit: React.FC<IGenreEdit> = ({ genreId }) => {
	const { genre, onSubmit, isLoading } = useGenreEdit(genreId)

	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
		values: {
			name: genre?.name || '',
			slug: genre?.slug || '',
			description: genre?.description || '',
			icon: genre?.icon! || ''
		}
	})

	return (
		<div className='px-6'>
			<Heading>Настройка жанра</Heading>

			<form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<div className='space-y-4'>
						{Array.from({ length: 3 }).map((_, index) => (
							<SkeletonLoader className='h-10' key={index} />
						))}
					</div>
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', {
									required: 'Название не может быть пустым!'
								})}
								placeholder='Название'
								error={errors.name}
								style={{ width: '31%' }}
							/>

							{/* Slug field */}

							<Field
								{...register('icon', {
									required: 'Иконка обязательна!'
								})}
								placeholder='Иконка'
								error={errors.name}
								style={{ width: '31%' }}
							/>
						</div>

						<Button>Сохранить</Button>
					</>
				)}
			</form>
		</div>
	)
}

export default GenreEdit
