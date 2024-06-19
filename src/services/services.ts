import { type DoctorDataProps } from 'utils/types/doctors-type'
import { api } from './config'
import { type AppointmentResponseProps } from 'utils/types/appointment'
import { type AppointmentProps } from 'app/(dashboard)/agendar-consulta/page'

export const listDoctors = async () =>
  await api.get<DoctorDataProps[]>('/Doctor/doctors')

export const postDoctors = async () =>
  await api.post<{ name: string; id: number }>('/Doctor/doctor')

export const getAllAppointments = async () =>
  await api.get<AppointmentResponseProps[]>('/Appointment/appointment')

export const createAppointment = async (values: AppointmentProps) => {
  try {
    await api.post('/Appointment/appointment', {
      pacientName: values.name,
      healthInsurance: values.agreement,
      address: {
        city: values.city,
        region: values.region,
        postalCode: values.postalCode,
        streetName: values.street,
        number: values.number,
        complement: values.complement,
      },
      appointmentDescription: values['reason-consultation'],
      appointmentPrice: values['consult-value'],
      doctor: {
        crm: values.crm,
      },
    })
  } catch (error) {
    console.error(error)
  }
}

export const updateAppointment = async (values: { diagnostic: string }) => {
  try {
    await api.put('/Appointment/appointment', {
      diagnostic: values.diagnostic,
    })
  } catch (error) {
    console.error(error)
  }
}
