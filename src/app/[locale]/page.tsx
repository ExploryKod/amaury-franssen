import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Image from 'next/image'
import profilePic from '@/public/avatar_me.png'
import ImageContainer from './components/ImageContainer'
import GithubIcon from '@/src/app/icons/github'
import LinkedinIcon from '@/src/app/icons/linkedin'
 
export default function DashboardPage() {
  const t = useTranslations('')

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
    </div>
  )
}
