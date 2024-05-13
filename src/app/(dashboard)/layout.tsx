import '../globals.css'
import Header from 'components/Header'
import SideMenu from 'components/SideMenu'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideMenu />
        {children}
      </div>
    </div>
  )
}
