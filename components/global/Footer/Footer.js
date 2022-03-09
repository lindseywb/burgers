import styles from './Footer.module.css'
import Link from 'next/link'
import Container from '../Container/Container'

export default function Footer() {
    return(
      <footer className={styles.Footer}>
        <Container size="wide">
          <Link href="https://rapidapi.com/coltla/api/burgers1/">
            <a>Powered by the Burger API</a>
          </Link>
        </Container>
      </footer>
    )
}
