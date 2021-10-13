import { useRouter } from 'next/router'
import Image from 'next/image'
import IntroImg from '/public/images/1.jpg'

const Intro = ({ title, description, link }) => {
  const router = useRouter()

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
            <h1 className="text-white-yellow mb-4">{title}</h1>
            <p className="text-grey">{description}</p>
            {
              link &&
                <button onClick={() => { router.push(link) }} className="mt-12">Create your plan</button>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro