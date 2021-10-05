import Image from 'next/image'
import IntroImg from '/public/images/1.jpg'

const Intro = () => {

  return (
    <section>
      <div className="container">
        <div className="relative rounded-lg overflow-hidden text-center">
          <Image
            src={IntroImg}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
          />
          <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full" />
          <div className="relative z-10 py-16 px-4">
            <h1 className="text-white-yellow mb-4">Great coffee made simple.</h1>
            <p className="text-grey mb-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button>Create your plan</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro