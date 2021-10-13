import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
// Lib
import axios from 'axios'
// Image
import IntroImg from '/public/images/1.jpg'
// Sections
import Intro from '../../sections/Intro'
import SelectPlan1 from '../../sections/SelectPlan'
const SelectPlan = dynamic(() => import('../../sections/SelectPlan'))
const HowItWorks = dynamic(() => import('../../sections/HowItWorks'))
// import SelectPlan from '../../sections/SelectPlan'
// import HowItWorks from '../../sections/HowItWorks'

export default function CreatePlan({ selection }) {
  return (
    <div>
      <Head>
        <title>Coffeeroasters | Create a plan</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark">


        <Intro 
          title="Create Plan" 
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
        />

        <HowItWorks />

        <SelectPlan1 selection={selection} />

      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const selection = await axios.get(`https://api.jsonbin.io/b/6163f977aa02be1d4457b4ab/7`, {
    headers: {"secret-key": `${process.env.SECRET_KEY}`}
  })
  return {
    props: {
      selection: selection.data
    }
  }
}
