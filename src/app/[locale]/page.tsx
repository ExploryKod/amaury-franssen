import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Image from 'next/image'
import profilePic from '@/public/corporate/avatar_me.webp'
import ImageContainer from './components/ImageContainer'
import { Projects } from './components/Projects'
import GithubIcon from '@/src/app/icons/github'
import LinkedinIcon from '@/src/app/icons/linkedin-official.webp'
import { SKills } from './components/Skills'
import { Modal } from "@/src/app/[locale]/components/modals/Modal" 

export interface BreakPoints {
  [key: string]: string;
}

export default function MainPage({
  params:  { locale },
  searchParams,
}:{
  params: { slug: string, locale: string },
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const t = useTranslations('')
  const show = searchParams?.show;
  

  const heroMaxWidth:BreakPoints = {
    xl: "1200",
    base: "800"
  }

  
  return (
    <div className="px-4">
      {show && <Modal />}
      <section id="home" className='relative flex flex-col sm:justify-center items-center gap-3 md:gap-[50px] mx-auto md:py-24 w-full max-w-screen-2xl min-h-hero'>
            
        <div className={`flex md:flex-row flex-col mx-auto w-full max-w-[${heroMaxWidth.base}px] xl:max-w-[${heroMaxWidth.xl}px]`}>
          <div className="flex md:justify-start items-center mb-6 w-full">
            <ImageContainer classNames="img-container-avatar object-cover rounded-full bg-background-secondary">
              <Image
                src={profilePic}
                alt="Photo de moi"
                blurDataURL="blur"
                placeholder="blur"
              />
            </ImageContainer>
          </div>
       
          <div className="flex flex-col justify-between xl:justify-center w-full">
            <h1 className='font-extrabold text-2xl md:text-3xl leading-tight'>
              {t('Welcome')}{' '}
              <br />
              <span className='bg-clip-text bg-span-bg text-transparent'>
                {t('my_name')}{' '}
              </span>
              <br />
              {t('an_enthousiast_web_developper')}
            </h1>
            <div className='flex sm:flex-row flex-col gap-5 my-6 w-full'>
                  <a
                  href='/CV_amaury_franssen_2024_v2.pdf'
                  target='_blank'
                >
                  <Button rounded size='large'>
                    {t('intro_cv_btn')}
                  </Button>
                </a>
                <div className="flex items-center gap-4">

                <a
                  href='https://github.com/ExploryKod'
                  target='_blank'
                >
                  <div className="flex flex-col justify-center items-center hover:opacity-75 w-[50px] h-[50px]">
                    <GithubIcon />
                  </div>
                </a>
                <a
                  href='https://www.linkedin.com/in/amaury-franssen/'
                  target='_blank'
                >
                  <div className="flex flex-col justify-center items-center hover:opacity-75">
                        <Image
                          height={56}
                          width={56}
                          src={LinkedinIcon }
                          alt={"Aller à linkedin"}
                          />
                  </div>
           
                </a>
                </div>
         
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-4 mt-4 w-full max-w-[800px] xl:max-w-[1200px]'>
          <div className="mx-auto">
          <p className="sm:block hidden text-2xl text-text-secondary">{t('intro_sm_description')} </p>
          <p className="sm:hidden text-2xl text-text-secondary">{t('intro_description')} </p>
          </div>
    
        </div>

        <div className='flex flex-row justify-center items-center gap-4 mt-4 w-full max-w-[800px] xl:max-w-[1200px]'>
          <a
            href='#skills'
          >
            <Button rounded size='large'>
              {t('intro_left_btn')}
            </Button>
          </a>
          <a
            href='#projects'
          >
            <Button rounded size='large' variant='secondary'>
              <span>{t('intro_right_btn')}</span>
            </Button>
          </a>
        </div>
      </section>

      <section id="skills" className="relative mx-auto py-24 w-full max-w-screen-2xl">
        <div className="mx-auto mt-5 mb-[60px] w-full">
            <h2 className='my-5 font-extrabold text-3xl md:text-4xl leading-tight'>
              {t('My_tech_title_first')}{' '}
              <span className='bg-clip-text bg-span-bg text-transparent'>
                {t('My_tech_title_middle')}{' '}
              </span>
              {t('My_tech_title_end')}{' '}
            </h2>
            {/* <p className="mt-5 text-lg italic">{t('My_tech_intro')}</p> */}
        </div>

        <SKills locale={locale} />

      </section>

      <section id="projects" className="relative mx-auto my-[24px] w-full max-w-screen-2xl">
        <Projects />
      </section>
    </div>
  )
}
