import { useTranslations } from 'next-intl'
import { projects } from '@/src/data/projects'
import type { Project } from '@/src/types/project/project'
import NotFoundWithProps from "@/src/app/[locale]/components/utilities/NotFoundWithProps" 

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
    
    const { project, locale } = params

    const currentProject:Partial<Project> | undefined  = projects?.find(p => p?.slug === project);

    console.log(currentProject)
    if(!currentProject) {
        return <NotFoundWithProps  locale={locale} color="button" text=""/>  
    }
    const { title } = {...currentProject}

  return (
    
    <div className="px-4 min-h-[100vh]">
        <section id="banner" className='flex flex-col sm:justify-center items-center gap-3 md:gap-[50px] bg-secondary mx-auto md:py-24 w-full max-w-screen-2xl'>
            <div className="mx-auto max-w-[1200px]">
                <h1 className="my-2 text-3xl text-primary">{title}</h1>
            </div>
        </section>
    </div>
  )
}
