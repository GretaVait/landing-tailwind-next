import Image from 'next/image'

const Header = () => {

  return (
    <header className="py-4">
      <div className="container">
        <Image 
          src="/images/logo.svg"
          width={174}
          height={14}
          alt="Coffeeroasters Logo"
        />
      </div>
    </header>
  )
}

export default Header