import { type DoctorDataProps } from 'utils/types/doctors-type'
import { api } from './config'

export const listDoctors = async () =>
  await api.get<DoctorDataProps[]>('/Doctor/doctors')

export const postDoctors = async () =>
  await api.post<{ name: string; id: number }>('/Doctor/doctor')
