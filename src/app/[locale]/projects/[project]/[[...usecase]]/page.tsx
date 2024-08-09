import { useTranslations } from 'next-intl'
import { projects } from '@/src/data/projects'
import type { Project } from '@/src/types/project/project'
import NotFoundWithProps from "@/src/components/utilities/NotFoundWithProps" 
import Image from 'next/image'
import ImageContainer from '@/src/components/ImageContainer'
import GithubIcon from '/public/github/github-simple.svg'
import websiteIcon from '/public/globe.svg'
import { SimpleLink } from '@/src/components/Button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/src/components/ui/accordion"
  

interface ProjectPage {
    params: { [key: string]: string | undefined },
    searchParams: { [key: string]: string | string[] | undefined }
}



export default function ProjectPage({
    params,
    searchParams,
}: ProjectPage) {
    const tp = useTranslations('projectPage')
    const t = useTranslations('')
    let isContentDefined:boolean = false;
    console.log(params)
    console.log(searchParams)
    
    const { project, locale } = params

    const currentProject:Partial<Project> | undefined  = projects?.find(p => p?.slug === project);

    console.log(currentProject)
    if(!currentProject) {
        return <NotFoundWithProps  locale={locale} color="button" text=""/>  
    }
    const { id, category, title, technos, website, github, image, year, content } = {...currentProject}

    console.log(content)

    const squares = [{id:1, color:'bg-buttonxlight'}, {id:2, color:'bg-buttonlight'}, {id:3, color:'bg-button'}]

    if(content) {
        isContentDefined = locale ? locale in content : false
    }
    

  return (
    
    <div className="relative px-4 min-h-[100vh]">

        <section id="banner" className='flex flex-col sm:flex-row gap-3 mx-auto my-2 md:py-[18px] w-full max-w-screen-2xl'>
            <div className="sm:w-1/3">
                {image && (image.url && image.alt) ?
                    (<ImageContainer classNames="
                        flex items-center justify-center max-w-full h-full bg-white w-full p-4 img-rounded-lg rounded-lg">
                        <Image
                        src={image.url}
                        alt={image.alt}
                        />
                    </ImageContainer>) 
                : null}
            </div>   
            <div className="bg-primary px-4 py-2 rounded-lg sm:w-3/4">
                <div className="">
                    <h1 className="my-2 text-3xl text-background">{title}</h1>
                    <p className="my-2 text-background text-lg">{content[locale ? locale : "fr"].catchPhrase}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 flex-wrap mt-5">
                
                    {website && website.length > 0 ?
                    (<SimpleLink target={"_blank"} className="size-fit inline-flex justify-center gap-2" url={website} variant={'lightSwipe'} rounded>
       
                        <Image
                            src={websiteIcon}
                            alt={""}
                        />
                        <span>{tp('Lien vers le site')}</span>

                     
            
                    </SimpleLink>) : null}

                    {github && github.length > 0 ?
                    (<SimpleLink className="size-fit inline-flex justify-center gap-2" url={github} variant={'lightSwipe'} rounded>
                        <Image
                            src={GithubIcon}
                            alt={""}
                        />
                        <span>{tp('Voir le repository')}</span>
                    </SimpleLink>) : null}
                    
                </div>
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
            <div className="bg-background px-4 py-2 rounded-xl font-bold text-sm text-primary">
                 <span>{year}</span>
                 </div>
                 <div className="bg-button px-4 py-2 rounded-xl font-bold text-sm text-white">
                    <span>{t(`${category}`)}</span>
                </div>
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
            {isContentDefined ? 
            (<div className={`max-w-[80%] w-full mx-auto flex flex-col`}>

                <div className="mt-5">
                    <p className="text-lg text-primary">{content[locale ? locale : "fr"].intro}</p>
                </div>

                <div className="flex min-w-[50%]">
                    <div className="inline-flex items-center gap-4">
                        {squares.map(square => {
                            return (<span key={square.id} className={`my-5 h-4 w-4 ${square.color}`}></span>)
                        })}
                        <h3 className="my-5 text-2xl font-bold">{tp('Mon apprentissage:')}</h3> 
                    </div>
                 
                   <ul>
                    <li></li>
    
                   </ul>
                </div>   
                <div></div>
            </div>): null}
        </div> 
    </div>
  )
}
