interface InputProps {
  label: string
  id: string
  type: string
  placeholder: string
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="text-base text-gray-950">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        className="w-96 p-3 border rounded-lg outline-none"
      />
    </div>
  )
}
