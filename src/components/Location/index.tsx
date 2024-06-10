interface LocationProp {
  city: string
}

export const Location = ({ city }: LocationProp) => {
  return (
    <div className="flex items-center gap-1">
      <img src="/icons/location.svg" alt="icone de localização" />
      <p className="text-sm text-gray-500">{city}</p>
    </div>
  )
}
