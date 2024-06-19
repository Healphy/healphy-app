import { forwardRef } from 'react'
import { type InputProps } from '../types'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, type, placeholder, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="text-base text-gray-950">
          {label}
        </label>
        <input
          {...rest}
          type={type}
          id={id}
          placeholder={placeholder}
          className="w-96 p-3 border rounded-lg outline-none"
          ref={ref}
        />
      </div>
    )
  },
)

Input.displayName = 'Input'
