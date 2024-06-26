import LoadingCard from 'app/loading'
import NextAppointments from 'components/NextAppointments'
import PatientsCard from 'components/PatientsCard'
import SmallCard from 'components/SmallCard'
import TopDoctorsCard from 'components/TopDoctorsCard'
import TotalRevenueCard from 'components/TotalRevenueCard'
import { type Metadata } from 'next'
import { Suspense } from 'react'
import { DashboardData } from 'utils/mocks/dashboard-mock'

export const metadata: Metadata = {
  title: 'Healphy | Dashboard',
  description: 'Healphy | Dashboard',
}

export default async function DashboardPage() {
  const dashboardProps = DashboardData

  return (
    <main className="p-7 w-full mt-20 rounded-xl bg-zinc-100">
      <h1 className="text-2xl font-semibold text-neutral-700 mb-5">
        Dashboard
      </h1>
      <div className="flex flex-col gap-6">
        <section>
          <ul className="flex w-full gap-6">
            {dashboardProps.smallCard?.map((item, index) => (
              <li className="w-full" key={`${item.cardTitle}-${index}`}>
                <SmallCard
                  cardTitle={item.cardTitle}
                  cardData={item.cardData}
                />
              </li>
            ))}
          </ul>
        </section>
        <div className="flex w-full gap-6">
          <div className="flex w-full flex-col gap-6">
            <TotalRevenueCard />
            <div className="flex min-h-fit gap-6">
              <Suspense fallback={<LoadingCard />}>
                <TopDoctorsCard />
              </Suspense>
              <PatientsCard />
            </div>
          </div>
          <NextAppointments />
        </div>
      </div>
    </main>
  )
}
