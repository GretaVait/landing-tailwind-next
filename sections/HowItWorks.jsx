import { useRouter } from "next/router"

const HowItWorks = () => {
  const router = useRouter()

  return (
    <section className="dark:bg-black">
      <div className="container">

        <div className="relative h-full">
          <h1 className="text-center mb-16 dark:text-white">how it works</h1>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white-yellow to-transparent dark:from-black" />
        </div>

        <Card 
          index={1}
          title="Pick your coffee"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />

        <Card 
          index={2}
          title="Choose the frequency"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />

        <Card 
          index={3}
          title="Receive &amp; enjoy"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />

        <div className="text-center">
          <button onClick={() => { router.push('/create-plan') }}>Create your plan</button>
        </div>

      </div>
    </section>
  )
}

const Card = ({ index, title, description }) => (
  <div className="text-center mb-12">
    <h3 className="mb-4 text-orange dark:text-white-yellow">0{index}</h3>
    <h2 className="mb-6 dark:text-white">{title}</h2>
    <p>{description}</p>
  </div>
)

export default HowItWorks