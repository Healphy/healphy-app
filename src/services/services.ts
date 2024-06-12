import { type DoctorDataProps } from 'utils/types/doctors-type'
import { api } from './config'
import { type AppointmentResponseProps } from 'utils/types/appointment'

export const listDoctors = async () =>
  await api.get<DoctorDataProps[]>('/Doctor/doctors')

export const postDoctors = async () =>
  await api.post<{ name: string; id: number }>('/Doctor/doctor')

export const getAllAppointments = async () =>
  await api.get<AppointmentResponseProps[]>('/Appointment/appointment')
