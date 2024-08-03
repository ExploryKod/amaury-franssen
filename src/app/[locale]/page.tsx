import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Image from 'next/image'
import profilePic from '@/public/avatar_me.png'
import ImageContainer from './components/ImageContainer'
import GithubIcon from '@/src/app/icons/github'
import LinkedinIcon from '@/src/app/icons/linkedin'

import JavaScriptImg from '/public/skills/javascript.svg'
import ReactImg from '/public/skills/react.svg'
import { ReactNode } from 'react'

type Skill = {
  id?: string
  text: string
  description?: string
  image?: ReactNode
  example?: string
  category?: string
  link?: string
  linkIcon?: React.FC<React.SVGProps<SVGSVGElement>>
}
 
export default function DashboardPage() {
  const t = useTranslations('')

  

  const skills: Partial<Skill[]> = [
    {text: 'JavaScript', image: JavaScriptImg},
    {text: 'React', image: ReactImg},
    {text: '', image: ''},
    {text: '', image: ''},
    {text: '', image: ''},
    {text: '', image: ''},
    {text: '', image: ''},
    {text: '', image: ''}
  ]

  return (
    <div className="px-4">
      <section id="home" className='min-h-hero mx-auto max-w-screen-2xl w-full 
                        flex flex-col items-center sm:justify-center gap-3 md:gap-[50px] md:py-24'>
        <div className="mx-auto w-full max-w-[800px] flex flex-col md:flex-row">
          <div className="w-full mb-6 flex items-center md:justify-start">
            <ImageContainer classNames="img-container rounded-full bg-background-secondary">
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
            <div className='w-full my-6 flex gap-5'>
                  <a
                  href='/CV_amaury_franssen_2024_v2.pdf'
                  target='_blank'
                >
                  <Button rounded size='large'>
                    {t('intro_cv_btn')}
                  </Button>
                </a>
                <a
                  href='https://github.com/ExploryKod'
                  target='_blank'
                >
                  <div className="bg-secondary size-12 flex flex-col items-center justify-center 
                  border border-[3px] border-button rounded-full hover:opacity-75">
                    <GithubIcon />
                  </div>
                </a>
                <a
                  href='https://www.linkedin.com/in/amaury-franssen/'
                  target='_blank'
                >
                  <div className="bg-secondary size-12 flex flex-col items-center justify-center 
                  border border-[3px] border-button rounded-full hover:opacity-75">
                    <LinkedinIcon />
                  </div>
           
                </a>
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
            href='https://github.com/ExploryKod'
            target='_blank'
          >
            <Button rounded size='large'>
              {t('intro_left_btn')}
            </Button>
          </a>
          <a
            href='https://github.com/ExploryKod'
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              {t('intro_right_btn')}
            </Button>
          </a>
        </div>
      </section>
      <section id="projects" className="my-[24px] mx-auto max-w-screen-2xl w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
    <h2 className="text-xl font-bold mb-2">Projet 1</h2>
    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
    <h2 className="text-xl font-bold mb-2">Projet 2</h2>
    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
    <h2 className="text-xl font-bold mb-2">Projet 3</h2>
    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</section>
    </div>
  )
}
