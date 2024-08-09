import { useTranslations } from 'next-intl'
import { Projects } from '@/src/app/[locale]/components/Projects'


export interface BreakPoints {
  [key: string]: string;
}

export default function ProjectsPage({
  params:  { locale },
  searchParams,
}:{
  params: { slug: string, locale: string },
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const t = useTranslations('')
  const show = searchParams?.show;
  
  return (
    <section id="projects" className="relative mx-auto py-[18px] w-full max-w-screen-2xl">
        <Projects locale={locale} />
    </section>
  )
}