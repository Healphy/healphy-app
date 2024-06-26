import { type TextareaHTMLAttributes, type InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  type: string
  placeholder: string
}

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  id: string
  placeholder: string
}
