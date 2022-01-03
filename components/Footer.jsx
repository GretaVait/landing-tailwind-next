import Image from 'next/image'
import Link from 'next/link'

const Footer = () => (
  <footer className="mb-4">
    <div className="container">
      <div className="bg-black p-16">
        <Image
          src="/images/logo-light.svg"
          width={234}
          height={19}
          alt="Cofeeroasters Logo"
        />

        <ul className="text-center py-8">
          <NavLink
            link="/"
            name="Home"
          />
          <NavLink
            link="/"
            name="About Us"
          />
          <NavLink
            link="/create-plan"
            name="Create your plan"
          />
        </ul>

        <div className="text-center">
          <SocialLink
            link="/"
            icon={{ url: 'facebook', width: 24 }}
          />
          <SocialLink
            link="/"
            icon={{ url: 'twitter', width: 29 }}
          />
          <SocialLink
            link="/"
            icon={{ url: 'instagram', width: 24 }}
          />
        </div>
      </div>
    </div>
  </footer>
)

const NavLink = ({ link, name }) => (
  <li className="py-2">
    <Link passHref href={link}><span className="uppercase text-grey-dark font-semibold">{name}</span></Link>
  </li>
)

const SocialLink = ({ link, icon }) => (
  <a href={link} className="px-4 inline-block">
    <Image
      src={`/images/${icon.url}.svg`}
      width={icon.width}
      height={24}
      alt={`${icon.url} icon`}
    />
  </a>
)

export default Footer