import Doctor from 'components/Doctor'
import Link from 'next/link'
import { DashboardData } from 'utils/mocks/dashboard-mock'

interface TopDoctorsCardProps {
  id: number
  doctorName: string
  doctorLastName: string
  speciality: string
}

export default function TopDoctorsCard(): TopDoctorsCardProps {
  const doctorProps = DashboardData
  return (
    <div className="w-full bg-white p-6 rounded-xl">
      <div className="flex w-full justify-between items-center">
        <h3 className="text-lg font-medium text-neutral-600">Top Médicos</h3>
        <Link
          className="rounded-lg border border-solid border-neutral-300 px-4 py-2 font-medium text-sm text-neutral-400"
          href="/medicos"
        >
          Ver todos
        </Link>
      </div>
      <ul className="flex flex-col gap-4 mt-6">
        {doctorProps.doctors.map((item, index) => (
          <li key={`${index}-${item.name}`}>
            <Doctor name={item.name} role={item.role} img={item.img} />
          </li>
        ))}
      </ul>
    </div>
  )
}
