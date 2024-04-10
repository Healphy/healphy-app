import AppointmentPrice from 'components/AppointmentPrice'
import Link from 'next/link'
import { DashboardData } from 'utils/mocks/dashboard-mock'

export default function NextAppointments() {
  const appointmentsProps = DashboardData

  return (
    <div className="flex flex-col w-3/6 max-h-custom p-5 rounded-xl bg-white">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h2 className="text-lg font-medium text-neutral-600">
            Próximas consultas
          </h2>
          <Link href="/consultas">
            <img
              src="/icons/arrow_right_line.svg"
              alt="arrow-icon"
              height={16}
              width={16}
            />
          </Link>
        </div>
      </div>
      <ul className="flex flex-col gap-5 my-5 scrollbar scrollbar-none overflow-y-scroll">
        {appointmentsProps.nextAppointments.map((item, index) => (
          <li key={`${index}-${item.name}`}>
            <AppointmentPrice
              name={item.name}
              doctor={item.doctor}
              date={item.date}
              price={item.price}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
