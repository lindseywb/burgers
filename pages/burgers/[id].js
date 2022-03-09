import styles from './id.module.css'
import Footer from '../../components/global/Footer/Footer'
import Heading from '../../components/global/Heading/Heading'
import Button from '../../components/global/Button/Button'
import Link from 'next/link'
import Container from '../../components/global/Container/Container'

export default function BurgerPost({post}) {
  return(
    <>
      <Heading />

      <main>
        <div className={styles.Burger}>
          <div className={styles.BunTop}>
            {post.name}
          </div>
          <div className={styles.Lettuce}>
            {post.restaurant}
          </div>
          <div className={styles.Tomato}>
            {post.description}
          </div>
          <div className={styles.Cheese}>

          </div>
          <div className={styles.Beef}>
            <ul>
              {post.ingredients.map((ingredient, key)=>(
                <li key={key}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className={styles.BunBottom}>
            <Link href={post.web}>
              <a>Website</a>
            </Link>
          </div>
        </div>
        <Container>
          <Button link="/burgers" text="All Burgers" />
        </Container>

      </main>

      <Footer />
    </>

  )
}

// Get a list of all the blog posts...
export async function getStaticPaths() {
  console.log(process.env.RAPIDAPIKEY)
  const res = await fetch("https://burgers1.p.rapidapi.com/burgers", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "burgers1.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPIKEY
    }
  })
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts.
  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString()
    }
  }))

  // Return a list of blog posts.
  return {
    paths,
    fallback: false // Means other routes should 404.
  }
}
// Query a single blog post...
export async function getStaticProps({ params }) {

  // Query blog post, based on `params.id`, generated from getStaticPaths()
  const res = await fetch(`https://burgers1.p.rapidapi.com/burgers/${params.id}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "burgers1.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPIKEY
    }
  })

  // Turn the response into JSON.
  const post = await res.json()

  // Pass data to the <Post /> component.
  return {
    props: { post }
  }
}
