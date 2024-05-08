import NextAppointments from 'components/NextAppointments'
import PatientsCard from 'components/PatientsCard'
import SmallCard from 'components/SmallCard'
import TopDoctorsCard from 'components/TopDoctorsCard'
import TotalRevenueCard from 'components/TotalRevenueCard'
import { listDoctors } from 'services/services'
import { DashboardData } from 'utils/mocks/dashboard-mock'

export interface DoctorDataProps {
  id: number
  doctorName: string
  doctorLastName: string
  birthData?: Date
  gender?: string
  nationality?: string
  email?: string
  crm?: string
  cnpj?: string
  speciality?: string
}

export default async function DashboardPage() {
  const dashboardProps = DashboardData
  const doctorsData = await listDoctors()
  console.log(doctorsData.data)

  return (
    <main className="p-7 w-full rounded-xl bg-zinc-100">
      <h1 className="text-2xl font-semibold text-neutral-700 mb-5">
        Dashboard
      </h1>
      <div className="flex flex-col gap-6">
        <ul className="flex w-full gap-6">
          {dashboardProps.smallCard?.map((item, index) => (
            <li className="w-full" key={`${item.cardTitle}-${index}`}>
              <SmallCard cardTitle={item.cardTitle} cardData={item.cardData} />
            </li>
          ))}
        </ul>
        <div className="flex w-full gap-6">
          <div className="flex w-full flex-col gap-6">
            <TotalRevenueCard />
            <div className="flex min-h-fit gap-6">
              <TopDoctorsCard />
              <PatientsCard />
            </div>
          </div>
          <NextAppointments />
        </div>
      </div>
    </main>
  )
}
