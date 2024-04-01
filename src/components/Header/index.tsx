import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import notification from '../../../public/icons/notification.png'
import SearchInput from 'components/SearchInput'
import RoleProfile from 'components/RoleProfile'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-center justify-between h-20 bg-white px-6">
      <Image src={logo} alt="logo-healphy" quality={100} />
      <SearchInput placeholder="Buscar" type="text" />
      <div className="flex items-center ml-6">
        <div className="mr-5 w-6 h-6">
          <Image src={notification} alt="notification-icon" quality={100} />
        </div>
        <Link href="/meu-perfil">
          <RoleProfile
            alt="profile-icon"
            src="https://github.com/bonatoneto.png"
            name="Neto Bonato"
            role="Dr. Pediatra"
          />
        </Link>
      </div>
    </header>
  )
}
