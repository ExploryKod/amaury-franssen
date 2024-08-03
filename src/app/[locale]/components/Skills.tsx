"use client"
import { useTranslations } from 'next-intl'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import Image from 'next/image'
import JavaScriptImg from '/public/skills/javaScript.svg'
import ReactImg from '/public/skills/react.svg'
import dockerImg from '/public/skills/docker-icon.svg'
import drupalImg from '/public/skills/drupal.svg'
import flaskImg from '/public/skills/flask.svg'
import laravel from '/public/skills/laravel.svg'
import mysql from '/public/skills/mysql.svg'
import phpImg from '/public/skills/php.svg'
import TypeScriptImg from '/public/skills/typescript-icon.svg'
import nextImg from '/public/skills/nextjs-icon.svg'
import tailwindcss from '/public/skills/tailwindcss-icon.svg'
import wordpressImg from '/public/skills/wordpress-icon.svg'
import GoImg from '/public/skills/go.svg'
import { ReactNode } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import ImageContainer from './ImageContainer'

type Skill = {
  id?: string
  text: string
  description?: string
  image?: string | StaticImport
  example?: string
  category?: string
  link?: string
  linkIcon?: React.FC<React.SVGProps<SVGSVGElement>>
}

const skills: Partial<Skill[] | null> = [
  {text: 'JavaScript', image: JavaScriptImg},
  {text: 'TypeScript', image: TypeScriptImg},
  {text: 'React', image: ReactImg},
  {text: 'NextJs', image: nextImg},
  {text: 'Tailwindcss', image: tailwindcss},
  {text: 'Docker', image: dockerImg},
  {text: 'Wordpress', image: wordpressImg},
  {text: 'Golang', image: GoImg},
  {text: 'Flask', image: flaskImg},
  {text: 'Laravel', image: laravel},
  {text: 'MySQL', image: mysql},
  {text: 'PHP', image: phpImg},
] 

interface Props {
    locale: string
  }

export const SKills: FC<Props> = ({ locale }) => {
  const t = useTranslations('')

return (
  <div className="mx-auto max-w-[800px] w-full flex gap-x-8  gap-y-4 justify-center items-center flex-wrap">
    {skills.map((skill) => {
      return skill?.image ? (<ImageContainer isContain={true} classNames="grow h-[150px] w-[150px] flex flex-col items-center justify-center"><Image
      height={100}
      width={100}
      src={skill.image}
      alt={skill.text}
    /></ImageContainer>) 
    : null
    })}
</div>
)

}