import styles from './Heading.module.css'
import Container from '../Container/Container'

export default function Heading() {
    return(
        <header className={styles.Heading}>
            <Container size="wide">
                <h1>It&apos;s Burger Time</h1>
            </Container>
        </header>
    )
}
