import Header from '../../components/global/Header/Header'
import styles from './index.module.css'
import Link from 'next/link'
import Footer from '../../components/global/Footer/Footer'
import Heading from '../../components/global/Heading/Heading'
import Container from '../../components/global/Container/Container'

export default function Burgers({posts}) {
  console.log({posts})

  return (
    <div className={styles.Burgers}>
      <Header />

       <main className={styles.main}>
        <Heading />

        {posts && (
          <Container size="wide" layout="grid">
            {posts.map((burger)=>(
              <div key={burger.id} className={styles.BurgerList}>
                <Link as={`/burgers/${burger.id}`} href="burgers/[id]">
                  <a>{burger.name}</a>
                </Link>
              </div>
            ))}
          </Container>
        )}


      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://burgers1.p.rapidapi.com/burgers", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "burgers1.p.rapidapi.com",
		"x-rapidapi-key": "8b99bb93a9msh54e55120fda0426p1ef27bjsn890d33a12af5"
	}
})
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
