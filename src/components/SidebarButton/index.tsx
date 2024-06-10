'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface SidebarButtonProps {
  href: string
  icon: StaticImageData
  name: string
  alt: string
}

export function SidebarButton(props: SidebarButtonProps) {
  const [isSelected, setIsSelected] = useState(false)
  const currentPath = usePathname()
  const iconStyle = {
    filter: isSelected ? 'brightness(0) invert(1)' : 'none',
  }

  useEffect(() => {
    setIsSelected(currentPath === props.href)
  }, [currentPath, props.href])

  return (
    <Link href={props.href} className="cursor-pointer" passHref>
      <div
        className={`flex w-full p-4 rounded-xl gap-2 ${
          !isSelected
            ? 'bg-transparent  text-gray-500 hover:bg-gray-200'
            : 'bg-blue-500 hover:bg-blue-700 text-white'
        }  transition-all font-semibold`}
      >
        <Image
          src={props.icon}
          alt={props.alt}
          quality={100}
          style={iconStyle}
        />
        {props.name}
      </div>
    </Link>
  )
}
