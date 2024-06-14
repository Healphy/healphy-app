export interface AppointmentPriceProps {
  name: string
  date: string
  price: number | string
}

export default function AppointmentPrice({
  name,
  date,
  price,
}: AppointmentPriceProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col gap-1">
        <h4
          className="font-medium text-base text-neutral-600"
          dangerouslySetInnerHTML={{ __html: name }}
        ></h4>
        {/* <p
          className="text-sm text-neutral-400"
          dangerouslySetInnerHTML={{ __html: doctor }}
        ></p> */}
        <p
          className="text-sm text-neutral-400"
          dangerouslySetInnerHTML={{ __html: date }}
        ></p>
      </div>
      <span className="text-lg font-semibold text-blue-600">{`R$${price}`}</span>
    </div>
  )
}
