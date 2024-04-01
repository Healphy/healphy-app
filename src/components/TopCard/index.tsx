interface TopCardProp {
  cardTitle: string
  cardData: string
}

export default function TopCard(props: TopCardProp) {
  return (
    <div className="flex w-full p-6 rounded-xl bg-white">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-gray-500">{props.cardTitle}</p>
        <span className="text-2xl font-bold">{props.cardData}</span>
      </div>
      <div></div>
    </div>
  )
}
