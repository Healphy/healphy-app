'use client'
import Image from 'next/image'
import logoutIcon from '../../../public/icons/logout-icon.svg'
import { useRouter } from 'next/navigation'
import { destroyCookie } from 'nookies'

export const LogoutButton = () => {
  const router = useRouter()
  function handleLogout() {
    destroyCookie(null, 'healphy-token', {
      path: '/',
    })
    router.push('/login')
  }

  return (
    <button onClick={handleLogout} className="fixed bottom-4 w-[208px]">
      <div className="flex w-full p-4 rounded-xl gap-2 bg-transparent text-gray-500 hover:bg-gray-200 transition-all font-semibold">
        <Image src={logoutIcon} alt="ícone de sair" quality={100} />
        Sair
      </div>
    </button>
  )
}
