import { forwardRef } from 'react'
import { type TextAreaProps } from '../types'

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, label, placeholder, ...rest }, ref) => {
    return (
      <div className="flex flex-col w-full gap-1">
        <label htmlFor={id} className="text-base font-medium text-gray-950">
          {label}
        </label>
        <textarea
          {...rest}
          id={id}
          placeholder={placeholder}
          className="w-full h-72 p-3 border rounded-lg outline-none"
          ref={ref}
        />
      </div>
    )
  },
)

TextArea.displayName = 'TextArea'
