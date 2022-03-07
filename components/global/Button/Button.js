import Link from "next/link"
import cn from 'classnames'
import styles from './Button.module.css'

export default function Button({link, style, text}) {
	const buttonClass = ! style ? 'center' : null

	const buttonClassNames = cn(
    styles.Button,
    buttonClass,
  )

	return(
		<>
			{link && (
				<Link href={link}>
					<a className={buttonClassNames}>
						{text}
					</a>
				</Link>
			)}
		</>
	)
}
