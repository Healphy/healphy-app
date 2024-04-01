import Image from 'next/image'
import search from '../../../public/icons/search.png'

interface SearchInputProps {
  placeholder: string
  type: string
}

export default function SearchInput(props: SearchInputProps) {
  return (
    <div className="flex w-full max-w-3xl h-10 p-3 rounded-lg gap-2 bg-zinc-100">
      <Image src={search} alt="search-icon" quality={100} />
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="w-full bg-zinc-100 outline-none"
      />
    </div>
  )
}
