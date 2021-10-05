import Image from 'next/image'

const Collection = ({ collection }) => {

  return (
    <section>
      <div className="container">
        <h1 className="text-center mb-7">our collection</h1>

        <div>
          {
            collection.map((item, index) => (
              <CoffeeCard
                image={item.image}
                name={item.name}
                description={item.description}
                key={index}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

const CoffeeCard = ({ image, name, description }) => (
  <div className="text-center mb-12">
    <div className="relative w-32 h-32 mx-auto mb-8">
      <Image 
        src={image}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt=""
      />
    </div>

    <h2 className="mb-4">{name}</h2>
    <p>{description}</p>
  </div>
)

export default Collection
