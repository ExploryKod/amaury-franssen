'use client'
import { capitalize } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
import en from '/public/flags/en.webp'
import fr from '/public/flags/fr.webp'
import es from '/public/flags/es.webp'
import { FiGlobe } from 'react-icons/fi'
import Button from './Button'

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string
    code: string
    flag: any
  }
  const pathname = usePathname()
  const urlSegments = useSelectedLayoutSegments()

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false)
  const options: Option[] = [
    { country: 'English', code: 'en' , flag: en}, 
    { country: 'Français', code: 'fr', flag: fr },
    { country: 'Español', code: 'es', flag: es },
  ]

  const currentLanguage = pathname && pathname.split('/').length > 1 
    ? options.find(lang => lang.code === pathname.split('/')[1])
    : null

  return (
    <div className='flex items-center justify-center'>
      <div className='relative'>
        <Button
          className='rounded-full text-destructive inline-flex w-full items-center justify-between gap-3'
          size='medium'
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          <span className='ml-2 hidden sm:inline'>
          {currentLanguage ? capitalize(currentLanguage.country) : "Français"}
          </span>
          {currentLanguage ?    <Image
                      width={15}
                      height={15}
                        src={currentLanguage.flag}
                        alt={currentLanguage.country}
                      /> : <FiGlobe />}
        </Button>
        {isOptionsExpanded && (
          <div className='absolute right-0 mt-2 w-full origin-top-right rounded-md bg-dropdown shadow-lg'>
            <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'
            >
              {options.map(lang => {
                return (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}/${urlSegments.join('/')}`}
                  >
                    <button
                      lang={lang.code}
                      onMouseDown={e => {
                        e.preventDefault()
                      }}
                      className={`flex gap-2 w-full px-4 py-2 text-left text-sm hover:bg-dropdownHover ${
                        pathname === `/${lang.code}`
                          ? 'bg-selected text-primary hover:bg-selected'
                          : 'text-secondary'
                      }`}
                    >
                      <Image width={20} height={20} src={lang.flag} alt={lang.country} />
                      <span className={`hidden sm:inline`}>{capitalize(lang.country)}</span>
                    </button>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LangSwitcher
