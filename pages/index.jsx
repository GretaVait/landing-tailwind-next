import Head from 'next/head'
import dynamic from 'next/dynamic'
// Lib
import axios from 'axios'
// import Collection from '../sections/Collection'
const Collection = dynamic(() => import('../sections/Collection'))
import Intro from '../sections/Intro'
import HowItWorks from '../sections/HowItWorks'
import Header from '../components/Header'
import WhyChooseUs from '../sections/WhyChooseUs'
import Footer from '../components/Footer'

export default function Home({ collection }) {
  return (
    <div>
      <Head>
        <title>Coffeeroasters</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>

        <Intro 
          title="Great coffee made simple."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."  
          link="/create-plan"
        />

        <Collection collection={collection} />

        <WhyChooseUs />

        <HowItWorks link="/create-plan" />

      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const collection = await axios.get(`https://api.jsonbin.io/b/615bf57caa02be1d44544017/6`, {
    headers: {"secret-key": `${process.env.SECRET_KEY}`}
  })
  return {
    props: {
      collection: collection.data
    }
  }
}
