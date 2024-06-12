import { type InputProps } from '../types'

export const SecondaryInput = (props: InputProps) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={props.id} className="text-base font-medium text-gray-950">
        {props?.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        className="w-full p-3 border rounded-lg outline-none"
      />
    </div>
  )
}
