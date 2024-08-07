"use client"
import { FC, useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image'
import ImageContainer from './ImageContainer'
import { skills } from '@/src/data/skills'

interface Props {
  locale: string
}

export const SKills: FC<Props> = ({locale}) => {
  const t = useTranslations('')
  const [hoveredSkillId, setHoveredSkillId] = useState<string>("uneffect");

  const selectedSkill = skills ? skills.find(skill => skill?.id.toString() === hoveredSkillId) || null : null;
  const isExample = selectedSkill?.example || null

  console.log(selectedSkill)
  console.log(isExample)

return (
  <>
  {skills && skills.length > 0 ?
  <div className="flex lg:flex-row flex-col items-center lg:items-start gap-4 md:border-2 bg-transparent md:bg-white mx-auto md:border md:border-button rounded-lg w-full">
    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 bg-transparent py-[40px] rounded-lg max-w-[600px]">
    {skills.map((skill) => {
      return skill?.image ? (
        <div   className="relative group/card"       key={skill.id} 
        onMouseEnter={() => setHoveredSkillId(skill.id.toString())}
        onMouseLeave={() => setHoveredSkillId("uneffect")}>
                      <Link href={isExample ? `/${locale}/projects/${skill.example && skill.example.slug}/${skill.text.toLowerCase()}`: "/#skills"}>
                      
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
    (<div className={`hidden lg:rounded-bl-lg lg:flex relative lg:flex-col lg:bg-button lg:p-[40px] lg:grow`}>


      {selectedSkill && isExample ? 

            (<div className={`w-[400px] flex flex-col gap-4 items-center justify-center`}>
              <div className="py-2">
                <h2 className="text-2xl text-center text-white">{selectedSkill.example && selectedSkill.example.title}</h2>
              </div>
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
              <div className="py-2">
                <p className="text-center text-white text-xl">{selectedSkill.example && selectedSkill.example.description}</p>
              </div>
            </div>)
      : (
        <div className={`w-[400px] bg-white rounded-lg transition-all ease-in-out`}> 
            <div className="flex justify-center items-center mx-auto p-2 max-w-[400px] h-full">
              <p className="text-2xl text-center">{selectedSkill ? "La description du cas d'usage pour cette technologie arrive bientôt." :
              "Découvrez des cas d' usages parmis mes projets en sélectionnant une technologie"}</p>
            </div>
        </div>
      )}

    </div>) : null}
   
</div>
: null}
</>
)

}