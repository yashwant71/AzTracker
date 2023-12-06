import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' },
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
  { src: '/assets/icons/user.svg', alt: 'user' },
]

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />

          <p className="nav-logo">
            Az<span className='text-primary textani1'>Tracker</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          <ThemeSwitcher />
          <IoSearchOutline  className="h-[1.2rem] w-[1.2rem]"/>
          <IoHeartOutline  className="h-[1.2rem] w-[1.2rem]"/>
          <RiUser3Line  className="h-[1.2rem] w-[1.2rem]"/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar