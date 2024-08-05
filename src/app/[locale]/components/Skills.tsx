"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ImageContainer from './ImageContainer'
import JavaScriptImg from '/public/skills/javaScript.svg'
import ReactImg from '/public/skills/react.svg'
import dockerImg from '/public/skills/docker-icon.svg'
import drupalImg from '/public/skills/drupal.svg'
import flaskImg from '/public/skills/flask.svg'
import laravel from '/public/skills/laravel.svg'
import mysql from '/public/skills/mysql.svg'
import TypeScriptImg from '/public/skills/typescript-icon.svg'
import nextImg from '/public/skills/nextjs-icon.svg'
import tailwindcss from '/public/skills/tailwindcss-icon.svg'
import wordpressImg from '/public/skills/wordpress-icon.svg'
import GoImg from '/public/skills/go.svg'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type Skill = {
  id: number
  text: string
  description?: string
  image?: string | StaticImport
  example?: string
  category?: string
  link?: string
  linkIcon?: React.FC<React.SVGProps<SVGSVGElement>>
}

const skills: Partial<Skill[] | null> = [
  {id: 1, text: 'TypeScript', image: TypeScriptImg},
  {id: 2, text: 'React', image: ReactImg},
  {id: 3, text: 'NextJs', image: nextImg},
  {id: 4, text: 'Tailwindcss', image: tailwindcss},
  {id: 5, text: 'Docker', image: dockerImg},
  {id: 6, text: 'Wordpress', image: wordpressImg},
  {id: 7, text: 'Golang', image: GoImg},
  // {id: 8,text: 'Flask', image: flaskImg},
  {id: 10, text: 'Laravel', image: laravel},
  {id:11, text: 'MySQL', image: mysql},
  // {id: 12, text: 'PHP', image: phpImg},
] 


export const SKills = () => {
  const t = useTranslations('')

return (
  <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 bg-white mx-auto p-[40px] rounded-lg w-full">
    {skills.map((skill) => {
      return skill?.image ? (<ImageContainer key={skill.id} isContain={true} classNames="
                          card-shadow cursor-pointer p-4 bg-white 
                          transition duration-300 rounded-lg hover:shadow-md h-[150px] w-[150px] 
                          flex flex-col items-center justify-center"><Image
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