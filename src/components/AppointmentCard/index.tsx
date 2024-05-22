export interface AppointmentCardProps {
  patientName: string
  location: string
  appoinmentDate: string
  appointmentType: string
  value: string
  agreement: string
}

export default function AppointmentCard(props: AppointmentCardProps) {
  return (
    <div className="flex justify-between gap-3 w-full max-w-lg m-6">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-base">{props.patientName}</p>
        <div className="flex items-center gap-1">
          <img src="/icons/location.svg" alt="icone de localização" />
          <p className="text-sm text-gray-500">Curitiba - PR</p>
        </div>
        <div className="flex items-center gap-1">
          <img src="/icons/calendar.svg" alt="icone de localização" />
          <p className="text-sm text-black">4 de Janeiro de 2022</p>
        </div>
        <div className="flex items-center gap-1">
          <img src="/icons/arrows.svg" alt="icone de localização" />
          <p className="text-sm text-black">Consulta Mensal Psiquiatrica</p>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full max-w-48">
        <span className="w-full text-center rounded-md bg-indigo-200 text-indigo-600 font-medium p-2">
          R$ 740,00
        </span>
        <div className="text-sm text-gray-500">
          <p>Convênio:</p>
          <p>Bradesco Saúde Int.</p>
        </div>
      </div>
    </div>
  )
}
