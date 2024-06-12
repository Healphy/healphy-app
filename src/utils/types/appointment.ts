export interface AppointmentResponseProps {
  id: number
  pacientName: string
  addressId: number
  address: null
  dateTime: string
  healthInsurance: string
  appointmentDescription: string
  diagnostic: string
  appointmentPrice: string
  status: string
  doctorId: number
  doctor: null
}

export interface AppointmentCardsDataProps {
  pacientName: string
  healthInsurance: string
  appointmentDescription: string
  appointmentPrice: string
}
