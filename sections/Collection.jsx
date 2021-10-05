import Image from 'next/image'

const Collection = ({ collection }) => {

  return (
    <section>
      <div className="container">
        <div className="relative h-full">
          <h1 className="text-center mb-16">our collection</h1>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white-yellow to-transparent" />
        </div>

        <div>
          {
            collection.map((item, index) => (
              <CoffeeCard
                image={item.image}
                name={item.name}
                description={item.description}
                id={index}
                key={index}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

const CoffeeCard = ({ image, name, description, id }) => (
  <div className={`text-center ${id < 3 ? 'mb-12' : ''}`}>
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
