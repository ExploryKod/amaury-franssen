"use client"
import { FC, useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { SquareArrowOutUpRight } from 'lucide-react';
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
import phpImg from '/public/skills/php.svg';
import nodeImg from '/public/skills/nodejsDark.svg'

import FoodcareFront from '/public/projects/foodcare-front.webp'
import ThreeJsIcon from '/public/skills/threedotjs.svg'
import AnoriaFront from '/public/projects/anoria-front.png'
import ChatTalksFront from '/public/projects/chat_talks.png'
import ecoMirrorFront from '/public/projects/ecomirror.webp';
import insureFront from '/public/projects/insure-front.webp';
import happyFormFront from '/public/projects/happy-form.png';
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Button from './Button'

type ProjectExample = {
  id: number
  title: string
  image: string | StaticImport
  description: string
  slug: string
  points: Array<string>
}

export type Skill = {
  id: number
  text: string
  description?: string
  image?: string | StaticImport
  example?: ProjectExample
  category?: string
  link?: string
  linkIcon?: React.FC<React.SVGProps<SVGSVGElement>>
}

type UseCaseImg = { md: {h:number, w:number}, lg: {h:number, w:number}}

const catTypeScriptExample: ProjectExample = {id: 1, title:"Cat Talks", image: ChatTalksFront, description:"Ce projet met en jeu TypeScript", points: [], slug: "cat-talks" }

const skills: Partial<Skill[] | null> = [
  {id: 1, text: 'TypeScript', image: TypeScriptImg, example: catTypeScriptExample},
  {id: 2, text: 'React', image: ReactImg, example: catTypeScriptExample},
  {id: 3, text: 'NextJs', image: nextImg, },
  {id: 4, text: 'Tailwindcss', image: tailwindcss},
  {id: 5, text: 'Docker', image: dockerImg},
  {id: 6, text: 'Wordpress', image: wordpressImg, example: catTypeScriptExample},
  {id: 7, text: 'Golang', image: GoImg, example: catTypeScriptExample},
  // {id: 8,text: 'Flask', image: flaskImg},
  {id: 10, text: 'Laravel', image: laravel},
  {id:11, text: 'MySQL', image: mysql},
  // {id: 12, text: 'PHP', image: phpImg},
] 

const useCaseImg: UseCaseImg = {
  md: {h: 200, w:200},
  lg: {h: 400, w:400}
}

interface Props {
  locale: string
}

export const SKills: FC<Props> = ({locale}) => {
  const t = useTranslations('')
  const [hoveredSkillId, setHoveredSkillId] = useState<string>("uneffect");

  const selectedSkill = skills.find(skill => skill?.id.toString() === hoveredSkillId) || null;
  const isExample = selectedSkill?.example || null

  console.log(selectedSkill)
  console.log(isExample)

return (
  <div className="flex lg:flex-row flex-col gap-4 md:border-2 bg-transparent md:bg-white mx-auto md:border md:border-button rounded-lg w-full">
    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 bg-transparent py-[40px] rounded-lg max-w-[600px]">
    {skills.map((skill) => {
      return skill?.image ? (
        <div   className="relative group/card"       key={skill.id} 
        onMouseEnter={() => setHoveredSkillId(skill.id.toString())}
        onMouseLeave={() => setHoveredSkillId("uneffect")}>
                      <Link href={isExample ? `/${locale}/projects/${skill.text.toLowerCase()}/${skill.example && skill.example.slug}`: "/#skills"}>
                      
                      <div className={`
                        top-0 right-0 z-lg absolute flex 
                        justify-center items-center
                        bg-white m-2 rounded-lg  ${hoveredSkillId === skill.id.toString() && isExample ? "opacity-1": "opacity-0"}
                        transition-opacity duration-150 ease-in-out w-[15px] h-[15px]`}>
                          <SquareArrowOutUpRight size={15} color={"var(--button)"}/>
                        </div>
                          <ImageContainer 
                          isContain={true} classNames={`
                              ${skill.id.toString() === hoveredSkillId ? "hovered-skill": ""}
                              ${(skill.id.toString() !== hoveredSkillId && hoveredSkillId !== "uneffect" ? "no-hovered-skill" : "")}
                                group/image relative hover:shadow-md 
                              card-shadow cursor-pointer p-4 bg-white 
                            transition duration-300 rounded-lg 
                            h-[150px] w-[150px] 
                            flex flex-col items-center justify-center`}>
                          <Image
                            height={100}
                            width={100}
                            src={skill.image}
                            alt={skill.text}
                            blurDataURL="blur"
                            placeholder="blur"
                          />
                          <div className={`py-2`}>
                            <span className="group-hover/card:font-bold text-center text-gray-600 text-sm">{hoveredSkillId === skill.id.toString() && isExample ? 'En savoir plus': skill.text}</span>
                            </div>
                      </ImageContainer>
                    </Link>
    </div>) 
    : null
    })}
    </div>
    {hoveredSkillId ?
    (<div className={`hidden lg:flex relative flex-col bg-button p-[40px] grow`}>


      {selectedSkill && isExample ? 

            (<div className={`flex flex-col gap-4 items-center justify-center`}>
              <ImageContainer 
                classNames={` 
                bg-white img-rounded-lg
                transition duration-300 rounded-lg h-auto 
                max-w-[300px]
                flex flex-col items-center justify-center`}>
                <Image
                  src={selectedSkill.example ? selectedSkill.example.image : ""}
                  alt={selectedSkill.text}
                  blurDataURL="blur"
                  placeholder="blur"
                />
              </ImageContainer> 
              <div className="py-5">
                <p className="text-center text-white text-xl">{selectedSkill.example && selectedSkill.example.description}</p>
              </div>
            </div>)
      : (
        <div className={`bg-white rounded-lg transition-all ease-in-out`}> 
            <div className="flex justify-center items-center mx-auto p-2 max-w-[400px] h-full">
              <p className="text-2xl text-center">{selectedSkill ? "La description du cas d'usage pour cette technologie arrive bientôt." :
              "Découvrez des cas d' usages parmis mes projets en sélectionnant une technologie"}</p>
            </div>
        </div>
      )}

    </div>) : null}
   
</div>
)

}