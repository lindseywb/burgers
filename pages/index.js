import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/global/Button/Button'
import Footer from '../components/global/Footer/Footer'
import Heading from '../components/global/Heading/Heading'

export default function Home() {

  return (
    <>
      <main className={styles.main}>
        <Heading />

        <Image src="/burger.gif" alt="Hamburger dropping on counter" width={377} height={275} />

        <p>This site uses the <a href="https://rapidapi.com/coltla/api/burgers1/">Burgers API.</a></p>

        <Button link="/burgers" text="View Burgers" />
      </main>

      <Footer />
    </>
  )
}
