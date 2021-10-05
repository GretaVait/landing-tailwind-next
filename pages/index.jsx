import Head from 'next/head'
// Lib
import axios from 'axios'
import Collection from '../sections/Collection'

export default function Home({ collection }) {
  return (
    <div>
      <Head>
        <title>Landing</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Collection collection={collection} />
        {/* <p>Collection</p> */}

      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const collection = await axios.get(`https://api.jsonbin.io/b/615bf57caa02be1d44544017/4`, {
    headers: {"secret-key": `${process.env.SECRET_KEY}`}
  })
  return {
    props: {
      collection: collection.data
    }
  }
}
