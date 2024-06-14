import { forwardRef } from 'react'
import { type InputProps } from '../types'

export const SecondaryInput = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, type, placeholder, ...rest }, ref) => {
    return (
      <div className="flex flex-col w-full gap-1">
        <label htmlFor={id} className="text-base font-medium text-gray-950">
          {label}
        </label>
        <input
          {...rest}
          type={type}
          id={id}
          placeholder={placeholder}
          className="w-full p-3 border rounded-lg outline-none"
          ref={ref}
        />
      </div>
    )
  },
)

SecondaryInput.displayName = 'Input'
