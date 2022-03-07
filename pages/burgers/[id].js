import styles from './id.module.css'
import Footer from '../../components/global/Footer/Footer'
import Heading from '../../components/global/Heading/Heading'
import Header from '../../components/global/Header/Header'
import Button from '../../components/global/Button/Button'

export default function BurgerPost({post}) {
  console.log({post})
  return(
    <>
      <Header />

      <Heading />

      <main className={styles.Burger}>
        <div className={styles.Bun}>
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
        <div className={styles.Bun}>

        </div>

        <Button />
      </main>

      <Footer link={post.web} />
    </>

  )
}

// Get a list of all the blog posts...
export async function getStaticPaths() {

  const res = await fetch("https://burgers1.p.rapidapi.com/burgers", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "burgers1.p.rapidapi.com",
		"x-rapidapi-key": "8b99bb93a9msh54e55120fda0426p1ef27bjsn890d33a12af5"
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
		"x-rapidapi-key": "8b99bb93a9msh54e55120fda0426p1ef27bjsn890d33a12af5"
	}
})

  // Turn the response into JSON.
  const post = await res.json()

  // Pass data to the <Post /> component.
  return {
    props: { post }
  }
}
