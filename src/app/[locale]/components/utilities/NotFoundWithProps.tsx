"use client"
import React from 'react'

import { useRouter } from 'next/navigation'
import Button from '../Button'

import { useTranslations } from 'next-intl'

interface NotFoundComponentProps {
  classNames?: string
  text: string
  color: string
  locale: string | undefined
}

const NotFoundWithProps: React.FC<NotFoundComponentProps > = ({
  classNames = "min-h-[100vh] p-[40px] flex gap-4 flex-col items-center",
  text ="",
  color = "button",
  locale,
  ...props
}) => {
  
  const t = useTranslations('')  
 
  return (
    <div className={classNames} {...props}>
      <div className={`min-w-[360px] border border-2 border-secondary rounded-lg`}>
          <div>
            <h1 className={`font-bold text-2xl text-center text-${color}`}>404</h1>
            <p className={`text-4xl text-center text-${color}`}>{text}</p>
          </div>
          <div>
            <a href={`/${locale}/#projects`}>
              <Button rounded variant={"secondary"} size='medium'>{t('Retour')}</Button>
            </a>
          </div>
        
      </div>

    </div>
  )
}

export default NotFoundWithProps
