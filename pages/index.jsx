import Head from 'next/head'
// Lib
import axios from 'axios'
import Collection from '../sections/Collection'
import Intro from '../sections/Intro'
import HowItWorks from '../sections/HowItWorks'

export default function Home({ collection }) {
  return (
    <div>
      <Head>
        <title>Coffeeroasters</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Intro 
          title="Great coffee made simple."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."  
        />

        <Collection collection={collection} />

        <HowItWorks />

      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const collection = await axios.get(`https://api.jsonbin.io/b/615bf57caa02be1d44544017/5`, {
    headers: {"secret-key": `${process.env.SECRET_KEY}`}
  })
  return {
    props: {
      collection: collection.data
    }
  }
}
