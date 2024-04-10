export interface DoctorProps {
  name: string
  img: {
    path: string
    alt: string
  }
  role: string
}

export default function Doctor({ name, img, role }: DoctorProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img className="rounded-full w-10 h-10" src={img.path} alt={img.alt} />
        <div className="">
          <span
            className="text-sm font-medium text-neutral-600"
            dangerouslySetInnerHTML={{ __html: name }}
          ></span>
          <p
            className="text-sm text-neutral-400"
            dangerouslySetInnerHTML={{ __html: role }}
          ></p>
        </div>
      </div>
      <img className="cursor-pointer" src="/icons/shape.svg" alt="show-more" />
    </div>
  )
}
