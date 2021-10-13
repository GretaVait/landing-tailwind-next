import Image from 'next/image'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  return (
    <header className="py-4">
      <div className="container">
        <div onClick={() => { router.push('/') }}>
          <Image 
            src="/images/logo.svg"
            width={174}
            height={14}
            alt="Coffeeroasters Logo"
          />
        </div>
      </div>
    </header>
  )
}

export default Header