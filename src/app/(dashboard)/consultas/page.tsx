import AppointmentCard from 'components/AppointmentCard'
import { type Metadata } from 'next'
import Link from 'next/link'
import { getAllAppointments } from 'services/services'
import {
  type AppointmentCardsDataProps,
  type AppointmentResponseProps,
} from 'utils/types/appointment'

export const metadata: Metadata = {
  title: 'Healphy | Consultas',
  description: 'Healphy | Consultas',
}

export default async function ConsultsPage() {
  const appointmentsResponse = await getAllAppointments()
  const appointmentsData = appointmentsResponse.data

  function mapAppointmentData(
    appointments: AppointmentResponseProps[],
  ): AppointmentCardsDataProps[] {
    return appointments.map((appointment: AppointmentCardsDataProps) => {
      return {
        pacientName: appointment.pacientName,
        appointmentDescription: appointment.appointmentDescription,
        healthInsurance: appointment.healthInsurance,
        appointmentPrice: appointment.appointmentPrice,
      }
    })
  }
  const mapAppointmentsCard = mapAppointmentData(appointmentsData)

  return (
    <main className="w-full px-6 py-8 rounded-xl bg-zinc-100">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-3xl">Consultas</h1>
        <Link
          href="/agendar-consulta"
          className="py-3 px-5 rounded-xl bg-blue-500 hover:bg-blue-700 text-white text-base font-medium"
        >
          Agendar Consultas
        </Link>
      </div>
      <div className="flex justify-between w-full rounded-2xl mt-8 bg-white">
        <ul className="grid grid-cols-2 w-full max-h-customAppointment">
          {mapAppointmentsCard.map((appointment, index) => (
            <li
              key={`${appointment.pacientName}-${index}`}
              className="flex w-full"
            >
              <AppointmentCard
                patientName={appointment.pacientName}
                appointmentType={appointment.appointmentDescription}
                value={appointment?.appointmentPrice}
                agreement={appointment.healthInsurance}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
