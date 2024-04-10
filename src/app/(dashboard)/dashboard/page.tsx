import NextAppointments from 'components/NextAppointments'
import SmallCard from 'components/SmallCard'
import TotalRevenueCard from 'components/TotalRevenueCard'
import { DashboardData } from 'utils/mocks/dashboard-mock'

export default function DashboardPage() {
  const dashboardProps = DashboardData

  return (
    <main className="p-7 w-full rounded-xl  bg-zinc-100">
      <h1 className="text-2xl font-bold text-neutral-700 mb-5">Dashboard</h1>
      <div className="flex flex-col gap-6">
        <ul className="flex w-full gap-6">
          {dashboardProps.smallCard?.map((item, index) => (
            <li className="w-full" key={`${item.cardTitle}-${index}`}>
              <SmallCard cardTitle={item.cardTitle} cardData={item.cardData} />
            </li>
          ))}
        </ul>
        <div className="flex w-full gap-6">
          <TotalRevenueCard />
          <NextAppointments />
        </div>
      </div>
    </main>
  )
}
