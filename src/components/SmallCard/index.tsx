export interface SmallCardProp {
  cardTitle: string
  cardData: string
}

export default function SmallCard({ cardTitle, cardData }: SmallCardProp) {
  return (
    <div className="flex w-full p-6 rounded-xl bg-white">
      <div className="flex flex-col gap-2">
        <h3
          className="text-sm font-medium text-neutral-500"
          dangerouslySetInnerHTML={{ __html: cardTitle }}
        ></h3>
        <span
          className="text-2xl font-semibold text-neutral-600"
          dangerouslySetInnerHTML={{ __html: cardData }}
        ></span>
      </div>
      <div></div>
    </div>
  )
}
