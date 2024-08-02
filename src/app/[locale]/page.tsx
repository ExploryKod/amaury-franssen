import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Image from 'next/image'
import profilePic from '@/public/avatar_me.png'
import ImageContainer from './components/ImageContainer'
 
const imageLoader = ({ src, width, quality }: any) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function DashboardPage() {
  const t = useTranslations('')

  return (
    <div className="px-4">
      <section className='mx-auto max-w-screen-2xl w-full flex flex-col items-center justify-center py-24'>
        <div className="mx-auto w-full max-w-[800px] flex md:flex-row">
          <div className="w-full mb-6 flex items-center justify-center">
            <ImageContainer classNames="img-container rounded-full bg-background-secondary">
              <Image
                src={profilePic}
                alt="Picture of the author"
                blurDataURL=""
                placeholder="blur" // Optional blur-up while loading
              />
            </ImageContainer>
          </div>
          <div className="w-full">
            <h1 className='text-2xl font-extrabold leading-tight'>
              {t('Welcome')}{' '}
              <br />
              <span className='bg-span-bg bg-clip-text text-transparent'>
                {t('my_name')}{' '}
              </span>
              <br />
              {t('an_enthousiast_web_developper')}
            </h1>
            <div className='w-full my-6 flex flex-row items-center justify-center'>
              <p className="text-2xl text-text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi quos aliquam ducimus </p>
            </div>
          </div>
        </div>
    
        <div className='w-full mt-4 flex flex-row items-center justify-center gap-4'>
          <a
            href='https://github.com/new?template_name=nextjs-template&template_owner=yahyaparvar'
            target='_blank'
          >
            <Button rounded size='large'>
              {t('intro_left_btn')}
            </Button>
          </a>
          <a
            href='https://github.com/yahyaparvar/nextjs-template'
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              {t('intro_right_btn')}
            </Button>
          </a>
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>Texts</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
       
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Text</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
          
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Performant</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
             
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
