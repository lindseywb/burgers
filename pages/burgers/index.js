import Header from '../../components/global/Header/Header'
import styles from './index.module.css'
import Link from 'next/link'
import Footer from '../../components/global/Footer/Footer'
import Heading from '../../components/global/Heading/Heading'
import Container from '../../components/global/Container/Container'

export default function Burgers({burgers}) {
  return (
    <>
      <Header />
      <Heading />
      <main className={styles.main}>
        <div className={styles.Burgers}>
          {burgers && (
            <Container size="wide" layout="grid">
              {burgers.map((burger)=>(
                <div key={burger.id} className={styles.BurgerList}>
                  <Link as={`/burgers/${burger.id}`} href="burgers/[id]">
                    <a>{burger.name}</a>
                  </Link>
                </div>
              ))}
            </Container>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://burgers1.p.rapidapi.com/burgers", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "burgers1.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPIKEY
    }
  })
  const burgers = await res.json()

  return {
    props: {
      burgers,
    },
  }
}
