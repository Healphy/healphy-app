import AppointmentCard from 'components/AppointmentCard'
import Link from 'next/link'
import { AppointmentData } from 'utils/mocks/appointment-mock'

export default function ConsultsPage(): JSX.Element {
  return (
    <>
      <main className="w-full px-6 py-8 rounded-2xl bg-zinc-100">
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
          {/* <ul className="flex w-full">
            <li className="w-full">
              <AppointmentCard
                patientName={'Neto Bonato'}
                location={'Curitiba - PR'}
                appoinmentDate={'13 de Janeiro de 2024'}
                appointmentType={'Consulta Mensal Psiquiatrica'}
                value={'R$ 271,00'}
                agreement={'Unimed'}
              />
            </li>
          </ul> */}
        </div>
      </main>
    </>
  )
}
