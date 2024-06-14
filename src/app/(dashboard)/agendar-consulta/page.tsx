'use client'
import { FormAppointment } from 'components/FormAppointment'
import Link from 'next/link'

export interface AppointmentProps {
  name: string
  agreement: string
  city: string
  postalCode: string
  street: string
  number: number
  region: string
  complement: string
  'reason-consultation': string
  'consult-value': string
  'doctor-name': string
  crm: string
}

export default function AppointmentDetailsPage() {
  return (
    <main className="p-7 w-full rounded-xl bg-zinc-100">
      <div className="p-5 rounded-2xl bg-white">
        <div>
          <div className="flex gap-8 items-center">
            <Link href="/consultas">
              <img src="/icons/arrow-left.svg" alt="ícone voltar" />
            </Link>
            <h1 className="text-2xl font-medium">Agendar consulta</h1>
          </div>
        </div>
        <FormAppointment />
      </div>
    </main>
  )
}
