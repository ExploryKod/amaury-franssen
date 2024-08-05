"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ImageContainer from './ImageContainer'
import GithubIcon from '/public/github/github-simple.svg'
import websiteIcon from '/public/globe.svg'
import { projects } from '@/src/data/projects'


export const Projects = () => {
  const t = useTranslations('')

return (
<>
    <div className="mt-5 mb-[60px] mx-auto max-w-[800px] w-full">
        <h2 className='my-5 text-3xl md:text-4xl font-extrabold leading-tight'>
        <span className="bg-span-bg bg-clip-text text-transparent">{t('My_project_title_first')}{' '}</span>
        {t('My_project_title')}{' '}
        </h2>
    </div>

    <div className="mx-auto max-w-[800px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

        {projects?.map((project) => {
        return project?.image ? (

        <div key={project.id} className="relative cursor-pointer bg-white rounded-lg 
                              shadow-md group hover:shadow-lg transition duration-300
                              flex
                              ">            
            <>
            <div className="absolute left-0 top-0 p-4 flex gap-4">
                {project.website && project.website.length > 0 ?
                (<a href={project.website} className="z-lg hover:opacity-75"><ImageContainer classNames="w-[24px] h-[24px]">
                    <Image
                        height={24}
                        width={24}
                        src={websiteIcon}
                        alt={""}
                    />
                </ImageContainer></a>) : null}

                {project.github && project.github.length > 0 ?
                (<a href={project.github} className="z-lg hover:opacity-75"><ImageContainer classNames="w-[24px] h-[24px]">
                    <Image
                        height={24}
                        width={24}
                        src={GithubIcon}
                        alt={""}
                    />
                </ImageContainer></a>) : null}
            </div>
        

            <h2 className="absolute right-0 text-2xl text-white font-bold p-2 bg-button rounded-tr-lg rounded-bl-lg">{project.title}</h2>
            
            
            <div className="z-10 absolute bottom-0 right-0 left-0 top-0 bg-gray-0.5 rounded-t-lg flex justify-between items-end">

                <div className={`${project.technos && project.technos.length > 0 ? 
                    "flex items-center justify-between gap-2 px-2 mx-auto rounded-t-lg border border-1 border-button w-full max-w-[80%] h-[60px]" : 
                    "hidden"}`}>
                          <div className="bg-button text-white text-sm font-bold my-2 py-2 px-4 rounded-xl">
                            <span>{t(`${project.category}`)}</span>
                         </div>
                    {project.technos ?
                    (<div className="flex items-center justify-center gap-4">
                    {project.technos?.map((techno, index) => {
                        return techno.url && techno.alt ? (<ImageContainer key={index+techno.alt} isContain={true} classNames="
                        img-rounded-lg bg-transparent rounded-lg w-full flex items-center justify-end">
                        <Image
                        height={30}
                        width={30}
                        src={techno.url}
                        alt={techno.alt}
                        />
                        </ImageContainer>) : null
                    })}
                    </div>) : null}
                </div>
            </div>
            {project.image.url && project.image.alt ?
                (<ImageContainer isContain={true} classNames="
                    bg-white w-full p-4 img-rounded-lg rounded-lg border border-1 border-button">
                    <Image
                    src={project.image.url}
                    alt={project.image.alt}
                    />
                </ImageContainer>) 
            : null}
            </>
        </div> 
    ) 
        : null;
        })}
    </div>
</>
)

}

