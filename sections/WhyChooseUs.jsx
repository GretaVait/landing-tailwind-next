import Image from 'next/image'

const WhyChooseUs = () => {

  return (
    <section className="text-center">
      <div className="container">
        <div className="bg-black pt-16 pb-8 px-4 rounded-t-lg">
          <h1 className="text-white mb-8">why choose us?</h1>
          <p className="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at eveniet sint provident possimus. Error quos aut facilis? Molestias facilis harum quidem ratione ducimus itaque voluptatibus debitis! Quibusdam, error at.</p>
        </div>

        <div className="relative pt-8">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-black rounded-b-lg" />
          <div className="relative z-10 px-4">
            <Card
              image={{ url: 'beans', width: 90 }}
              title="Best quality"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at eveniet sint provident possimus."
            />
            <Card
              image={{ url: 'gift', width: 80 }}
              title="Exclusive Benefits"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at eveniet sint provident possimus."
            />
            <Card
              image={{ url: 'delivery', width: 86 }}
              title="Free Delivery"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at eveniet sint provident possimus."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const Card = ({ image, title, description }) => (
  <div className="bg-green py-16 px-8 rounded-lg mb-4">
    <Image
      src={`/images/${image.url}.svg`}
      width={image.width}
      height={70}
      alt=""
    />
    <h2 className="text-white pt-8 pb-4">{title}</h2>
    <p className="text-grey">{description}</p>
  </div>
)

export default WhyChooseUs