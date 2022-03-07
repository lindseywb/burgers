import cn from 'classnames'
import styles from './Container.module.css'

export default function Container({children, layout, size}) {

	const containerClasses = cn(
		styles.Container,
		layout ? styles.Grid : null,
		size ? styles.Wide : null
	)
	return (
		<div className={containerClasses}>
			{children && children}
		</div>
	)
}
