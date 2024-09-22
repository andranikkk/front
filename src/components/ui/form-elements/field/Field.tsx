import { IField } from '../form.interface'
import styles from './Field.module.scss'
import React, { forwardRef } from 'react'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, style, ...rest }, ref) => {
		return (
			<div className={styles.field} style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} placeholder={placeholder} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
