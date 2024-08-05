import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Image from 'next/image'
import profilePic from '@/public/corporate/avatar_me.webp'
import ImageContainer from './components/ImageContainer'
import { Projects } from './components/Projects'
import GithubIcon from '@/src/app/icons/github'
import LinkedinIcon from '@/src/app/icons/linkedin-official.webp'
import { SKills } from './components/Skills'
 
export default function DashboardPage() {
  const t = useTranslations('')

  return (
    <div className="px-4">
      <section id="home" className='relative min-h-hero mx-auto max-w-screen-2xl w-full 
                        flex flex-col items-center sm:justify-center gap-3 md:gap-[50px] md:py-24'>
            <div>
            </div>
        <div className="mx-auto w-full max-w-[800px] flex flex-col md:flex-row">
          <div className="w-full mb-6 flex items-center md:justify-start">
            <ImageContainer  key={""} classNames="img-container-avatar rounded-full bg-background-secondary">
              <Image
                src={profilePic}
                alt="Photo de moi"
                blurDataURL="blur"
                placeholder="blur" // Optional blur-up while loading
              />
            </ImageContainer>
          </div>
       
          <div className="w-full flex flex-col justify-between">
            <h1 className='text-2xl md:text-3xl font-extrabold leading-tight'>
              {t('Welcome')}{' '}
              <br />
              <span className='bg-span-bg bg-clip-text text-transparent'>
                {t('my_name')}{' '}
              </span>
              <br />
              {t('an_enthousiast_web_developper')}
            </h1>
            <div className='w-full my-6 flex flex-col gap-5 sm:flex-row'>
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
                  <div className="flex flex-col items-center justify-center h-[50px] w-[50px] hover:opacity-75">
                    <GithubIcon />
                  </div>
                </a>
                <a
                  href='https://www.linkedin.com/in/amaury-franssen/'
                  target='_blank'
                >
                  <div className="flex flex-col items-center justify-center hover:opacity-75">
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
        <div className='w-full mt-4 flex flex-row items-center justify-center gap-4'>
          <div className="mx-auto max-w-[800px]">
          <p className="hidden sm:block text-2xl text-text-secondary">{t('intro_sm_description')} </p>
          <p className="sm:hidden text-2xl text-text-secondary">{t('intro_description')} </p>
          </div>
    
        </div>

        <div className='w-full mt-4 flex flex-row items-center justify-center gap-4'>
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
              {t('intro_right_btn')}
            </Button>
          </a>
        </div>
      </section>

      <section id="skills" className="relative py-24 mx-auto max-w-screen-2xl w-full">
        <div className="mt-5 mb-[60px] mx-auto max-w-[800px] w-full">
            <h2 className='my-5 text-3xl md:text-4xl font-extrabold leading-tight'>
              {t('My_tech_title_first')}{' '}
              <span className='bg-span-bg bg-clip-text text-transparent'>
                {t('My_tech_title_middle')}{' '}
              </span>
              {t('My_tech_title_end')}{' '}
            </h2>
            {/* <p className="mt-5 text-lg italic">{t('My_tech_intro')}</p> */}
        </div>
  

        <SKills />

      </section>

      <section id="projects" className="relative my-[24px] mx-auto max-w-screen-2xl w-full">
        <Projects />
      </section>
    </div>
  )
}
