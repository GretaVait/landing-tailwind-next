import Image from 'next/image'

const Header = () => {

  return (
    <header>
      <Image 
        src="/images/logo.svg"
        width={174}
        height={14}
        alt="Coffeeroasters Logo"
      />
    </header>
  )
}

export default Header