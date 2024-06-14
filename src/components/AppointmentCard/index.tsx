import { Location } from 'components/Location'
import Link from 'next/link'

export interface AppointmentCardProps {
  slug: number
  patientName: string
  location?: string
  appoinmentDate?: string
  appointmentType?: string
  value?: string
  agreement: string
}

export default function AppointmentCard(props: AppointmentCardProps) {
  return (
    <Link
      href={`/consultas/detalhes/${props.slug}`}
      className="flex justify-between gap-3 w-full max-w-lg m-6"
    >
      <div className="flex flex-col gap-2">
        <p className="font-medium text-base">{props.patientName}</p>
        <Location city={props.location} />
        <div className="flex items-center gap-1">
          <img src="/icons/calendar.svg" alt="icone de calendario" />
          <p className="text-sm text-black">4 de Janeiro de 2022</p>
        </div>
        <div className="flex items-center gap-1">
          <img src="/icons/arrows.svg" alt="icone de seta" />
          <p className="text-sm text-black">{props.appointmentType}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full max-w-48">
        <span className="w-full text-center rounded-md bg-indigo-200 text-indigo-600 font-medium p-2">
          {`R$ ${props.value}.00`}
        </span>
        <div className="text-sm text-gray-500">
          <p>Convênio:</p>
          <p>{props.agreement}</p>
        </div>
      </div>
    </Link>
  )
}
