import AppointmentPrice from 'components/AppointmentPrice'
import { DashboardData } from 'utils/mocks/dashboard-mock'

export default function NextAppointments() {
  const appointmentsProps = DashboardData

  return (
    <div className="flex flex-col w-1/3 max-h-96 p-5 rounded-xl bg-white overflow-y-auto">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold text-neutral-600">
          Próximas consultas
        </h2>
      </div>
      <ul className="flex flex-col gap-5 my-5">
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
