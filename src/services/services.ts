import { type DoctorDataProps } from 'app/(dashboard)/dashboard/page'
import { api } from './config'

export const listDoctors = async () =>
  await api.get<DoctorDataProps>('/Doctor/doctors')
