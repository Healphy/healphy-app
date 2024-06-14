import {
  type AppointmentCardsDataProps,
  type AppointmentResponseProps,
} from 'utils/types/appointment'

export function mapAppointmentData(
  appointments: AppointmentResponseProps[],
): AppointmentCardsDataProps[] {
  return appointments.map((appointment: AppointmentCardsDataProps) => {
    return {
      id: appointment.id,
      pacientName: appointment.pacientName,
      appointmentDescription: appointment.appointmentDescription,
      healthInsurance: appointment.healthInsurance,
      appointmentPrice: appointment.appointmentPrice,
    }
  })
}
