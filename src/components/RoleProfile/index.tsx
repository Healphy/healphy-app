interface RoleProfileProps {
  src: string
  alt: string
  name: string
  role: string
}

export default function RoleProfile(props: RoleProfileProps) {
  return (
    <div className="flex min-w-40 max-w-48 gap-2">
      <div className="flex w-10 h-10">
        <img
          src={props.src}
          alt={props.alt}
          className="rounded-full w-10 h-10"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-sm text-neutral-950">
          {props.name}
        </span>
        <span className="text-neutral-500">{props.role}</span>
      </div>
    </div>
  )
}
