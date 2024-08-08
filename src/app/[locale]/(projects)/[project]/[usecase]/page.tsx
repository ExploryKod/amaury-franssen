import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { projects } from '@/src/data/projects'
import type { Project } from '@/src/types/project/project'
import NotFoundWithProps from "@/src/app/[locale]/components/utilities/NotFoundWithProps" 
import ImageContainer from '@/src/app/[locale]/components/ImageContainer'
import GithubIcon from '/public/github/github-simple.svg'
import websiteIcon from '/public/globe.svg'

interface ProjectPage {
    params: { [key: string]: string | undefined },
    searchParams: { [key: string]: string | string[] | undefined }
}



export default function ProjectsPage({
    params,
    searchParams,
}: ProjectPage) {
    const t = useTranslations('')
    console.log(params)
    console.log(searchParams)
    
    const { usecase, project, locale } = params

    const currentProject:Partial<Project> | undefined  = projects?.find(p => p?.slug === project && Object.keys(p?.usecases || {}).includes(usecase || ""));

    console.log(currentProject)
    if(!currentProject) {
        return <NotFoundWithProps  locale={locale} color="button" text=""/>  
    }
    const { title, technos, image,  website, github, category } = {...currentProject}

  return (
    
    <div className="relative px-4 min-h-[100vh]">

        <section id="banner" className='flex gap-3 mx-auto my-2 md:py-[18px] w-full max-w-screen-2xl'>
                <div className="w-1/3">
                    {image && (image.url && image.alt) ?
                        (<ImageContainer classNames="
                            max-w-[100%] bg-white w-full p-4 img-rounded-lg rounded-lg">
                            <Image
                            src={image.url}
                            alt={image.alt}
                            />
                        </ImageContainer>) 
                    : null}
                </div>   
            <div className="w-3/4">
                <h1 className="my-2 text-3xl text-primary">{title}</h1>
                <p className="my-2 text-lg text-primary">Integrer l&#39; équilibre alimentaire et écologique à l&#39; acte d&#39; achat</p>
            </div>
        </section>

        <section id="project-card" className="flex flex-col gap-4 mx-auto max-w-screen-2xl">

        </section>
        <div 
        className={`min-h-[600px] relative flex flex-col bg-white rounded-lg group`}>   

             
            <div className="flex justify-between items-end border-1 bg-gray-0.5 mx-auto px-2 border border-t-0 border-button rounded-b-lg w-full max-w-[80%] h-[60px]">

            <div className={`${technos && technos.length > 0 ? 
                    "grow flex items-center justify-between gap-2" : 
                    "hidden"}`}>

            <div className="flex gap-4 p-4">
                    {website && website.length > 0 ?
                    (<a href={website} className="z-lg hover:opacity-75">
                        <ImageContainer classNames="w-[24px] h-[24px]">
                        <Image
                            height={24}
                            width={24}
                            src={websiteIcon}
                            alt={""}
                        />
                        </ImageContainer>
                    </a>) : null}

                    {github && github.length > 0 ?
                    (<a href={github} className="z-lg hover:opacity-75">
                        <ImageContainer classNames="w-[24px] h-[24px]">
                        <Image
                            height={24}
                            width={24}
                            src={GithubIcon}
                            alt={""}
                        />
                    </ImageContainer>
                    </a>) : null}
                </div>

            <div className="bg-button my-2 px-4 py-2 rounded-xl font-bold text-sm text-white">
        
                <span>{t(`${category}`)}</span>
            </div>

        

                {technos ?
                (<div className="flex justify-center items-center gap-4">
                {technos?.map(techno => {
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
            
            <div className={`max-w-[80%] w-full mx-auto flex justify-between gap-4`}>

          

                <div className="flex justify-center min-w-[50%] grow">
                    
                    <div>
                      
                    </div> 

                </div>    


            </div>
        
      

        </div> 
    </div>
  )
}
