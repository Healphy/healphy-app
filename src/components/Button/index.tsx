interface ButtonProps {
  text: string
  iconPath?: string
  color: string
  hover: string
  type?: 'submit' | 'reset' | 'button'
}

export const Button = ({ text, iconPath, color, hover, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`w-full flex items-center justify-center gap-1 rounded-lg ${color} ${hover} p-3 text-white font-medium transition-all`}
    >
      <div className="flex gap-2 min-w-max">
        {iconPath !== undefined && <img src={iconPath} alt="ícone do botão" />}
        {text}
      </div>
    </button>
  )
}
