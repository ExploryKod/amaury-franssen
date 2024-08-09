"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ImageContainer from './ImageContainer'
import GithubIcon from '/public/github/github-simple.svg'
import websiteIcon from '/public/globe.svg'
import { projects } from '@/src/data/projects'
import { useRouter } from 'next/navigation'

interface ProjectProps {
    locale: string
}

export const Projects = ({locale}: ProjectProps) => {
  const t = useTranslations('')
  const router = useRouter()

return (
<>
    <div className="mx-auto mt-5 mb-[60px] w-full">
        <h2 className='my-5 font-extrabold text-3xl md:text-4xl leading-tight'>
        <span className="bg-clip-text bg-span-bg text-transparent">{t('My_project_title_first')}{' '}</span>
        {t('My_project_title')}{' '}
        </h2>
    </div>

    <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full">

        {projects?.map((project) => {
        return project?.image ? (
       
        <div key={project.id} 
        onClick={() => router.push(`/${locale}/projects/${project.slug}`)}
        className="relative flex flex-col justify-between bg-white shadow-md hover:shadow-lg rounded-lg max-w-[600px] transition duration-300 cursor-pointer group">            

            <div className="flex justify-between">
                <div className="flex gap-4 p-4">
                    {project.website && project.website.length > 0 ?
                    (<a href={project.website} className="z-lg hover:opacity-75">
                        <ImageContainer classNames="w-[24px] h-[24px]">
                        <Image
                            height={24}
                            width={24}
                            src={websiteIcon}
                            alt={""}
                        />
                        </ImageContainer>
                    </a>) : null}

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
            

                <h2 className="bg-button p-2 rounded-tr-lg rounded-bl-lg font-bold text-2xl text-white">{project.title}</h2>

            </div>
            
            <div>
                {project.image.url && project.image.alt ?
                    (<ImageContainer classNames="
                        mx-auto max-w-[300px] bg-white w-full p-4 img-rounded-lg rounded-lg">
                        <Image
                        src={project.image.url}
                        alt={project.image.alt}
                        />
                    </ImageContainer>) 
                : null}
            </div>
            <div className="flex justify-between items-end bg-gray-0.5 rounded-t-lg">

               
            <div className={`${project.technos && project.technos.length > 0 ? 
                    "flex items-center justify-between gap-2 px-2 mx-auto rounded-t-lg border-b-0 border border-1 border-button w-full max-w-[80%] h-[60px]" : 
                    "hidden"}`}>
            <div className="bg-button my-2 px-4 py-2 rounded-xl font-bold text-sm text-white">
                <span>{t(`${project.category}`)}</span>
            </div>
                {project.technos ?
                (<div className="flex justify-center items-center gap-4">
                {project.technos?.map(techno => {
                    return techno.url && techno.alt ? (<div key={techno.id}><ImageContainer isContain={true} classNames="
                    bg-transparent w-full flex items-center justify-end">
                    <Image
                    height={30}
                    width={30}
                    src={techno.url}
                    alt={techno.alt}
                    />
                    </ImageContainer></div>) : null
                })}
                </div>) : null}
            </div>
</div>

           

        </div> 
    ) 
        : null;
        })}
    </div>
</>
)

}

