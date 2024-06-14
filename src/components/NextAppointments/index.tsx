import AppointmentPrice from 'components/AppointmentPrice'
import Link from 'next/link'
import { getAllAppointments } from 'services/services'

export default async function NextAppointments() {
  const appointmentsResponse = await getAllAppointments()
  const appointmentsData = appointmentsResponse.data

  return (
    <section className="flex flex-col w-3/6 p-5 rounded-xl bg-white">
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
        {appointmentsData.map((item, index) => (
          <li key={`${index}-${item.pacientName}`}>
            <AppointmentPrice
              name={item.pacientName}
              date={item.dateTime}
              price={item.appointmentPrice}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
