import AppointmentCard from 'components/AppointmentCard'
import { type Metadata } from 'next'
import Link from 'next/link'
import { AppointmentData } from 'utils/mocks/appointment-mock'

export const metadata: Metadata = {
  title: 'Healphy | Consultas',
  description: 'Healphy | Consultas',
}

export default function ConsultsPage(): JSX.Element {
  return (
    <main className="w-full px-6 py-8 rounded-xl bg-zinc-100">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-3xl">Consultas</h1>
        <Link
          href="/"
          className="py-3 px-5 rounded-xl bg-blue-500 hover:bg-blue-700 text-white text-base font-medium"
        >
          Agendar Consultas
        </Link>
      </div>
      <div className="flex justify-between w-full rounded-2xl mt-8 bg-white">
        <ul className="grid grid-cols-2 w-full max-h-customAppointment">
          {AppointmentData.appointments.map((appointment, index) => (
            <li
              key={`${appointment.patientName}-${index}`}
              className="flex w-full"
            >
              <AppointmentCard
                patientName={appointment.patientName}
                location={appointment.location}
                appoinmentDate={appointment.appoinmentDate}
                appointmentType={appointment.appointmentType}
                value={appointment.value}
                agreement={appointment.agreement}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
