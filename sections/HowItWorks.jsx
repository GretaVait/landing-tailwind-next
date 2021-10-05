import { useRouter } from "next/router"

const HowItWorks = ({ darkMode }) => {
  const router = useRouter()

  return (
    <section className={`${darkMode ? 'bg-black' : ''}`}>
      <div className="container">

        <h1 className={`text-center mb-16 ${darkMode ? 'text-white' : ''}`}>how it works</h1>

        <Card 
          index={1}
          title="Pick your coffee"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          darkMode={darkMode}
        />

        <Card 
          index={2}
          title="Choose the frequency"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          darkMode={darkMode}
        />

        <Card 
          index={3}
          title="Receive &amp; enjoy"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          darkMode={darkMode}
        />

        <div className="text-center">
          <button onClick={() => { router.push('/create-plan') }}>Create your plan</button>
        </div>

      </div>
    </section>
  )
}

const Card = ({ index, title, description, darkMode }) => (
  <div className="text-center mb-12">
    <h3 className={`mb-4 ${darkMode ? 'text-white-yellow' : ''}`}>0{index}</h3>
    <h2 className={`mb-b ${darkMode ? 'text-white' : ''}`}>{title}</h2>
    <p>{description}</p>
  </div>
)

export default HowItWorks