import { SidebarButton } from 'components/SidebarButton'
import dashboardIcon from '../../../public/icons/Dashboard.svg'
import consultIcon from '../../../public/icons/building.svg'
import doctorIcon from '../../../public/icons/person.svg'
import profileIcon from '../../../public/icons/profile.svg'
import { LogoutButton } from 'components/LogoutButton'

export default function SideMenu() {
  return (
    <aside className="min-w-60 mt-20 bg-white">
      <ul className="flex flex-col p-4 gap-4">
        <SidebarButton
          href="/dashboard"
          name="Dashboard"
          icon={dashboardIcon}
          alt="dashboard-icon"
        />
        <SidebarButton
          href="/consultas"
          name="Consultas"
          icon={consultIcon}
          alt="consult-icon"
        />
        <SidebarButton
          href="/agendar-consulta"
          name="Agendar consulta"
          icon={consultIcon}
          alt="consult-icon"
        />
        <SidebarButton
          href="/medicos"
          name="Médicos"
          icon={doctorIcon}
          alt="doctor-icon"
        />
        <SidebarButton
          href="/meu-perfil"
          name="Meu perfil"
          icon={profileIcon}
          alt="profile-icon"
        />
        <LogoutButton />
      </ul>
    </aside>
  )
}
