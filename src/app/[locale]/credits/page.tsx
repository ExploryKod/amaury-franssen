<a href="https://www.flaticon.com/free-icons/uk-flag" title="uk flag icons">Uk flag icons created by Freepik - Flaticon</a>

import { useTranslations } from 'next-intl'

export default function Credits() {
  const t = useTranslations('')
  return (
    <div className="px-4">
        <section id="home" className='min-h-hero mx-auto max-w-screen-2xl w-full 
                        flex flex-col items-center sm:justify-center gap-3 md:gap-[50px] md:py-24'>
            <div className="mx-auto max-w-[1200px]">
                <h1 className="text-3xl text-primary my-2">{t('credit_title')}</h1>
                <ul className="flex flex-col gap-3">
                    <h2 className="my-5 text-2xl font-bold">{t('credit_flags')}</h2>
                    <li> <a className="underline hover:primary" href="https://www.flaticon.com/free-icons/uk-flag" title="uk flag icons">Uk flag icons created by Freepik - Flaticon</a></li>
                    <li><a className="underline hover:primary"  href="https://www.flaticon.com/free-icons/france" title="france icons">France icons created by Freepik - Flaticon</a></li>
                    <li><a className="underline hover:primary" href="https://www.flaticon.com/free-icons/spain" title="spain icons">Spain icons created by amoghdesign - Flaticon</a></li>
                    <h2 className="my-5 text-2xl font-bold" >{t('credit_flags')}</h2>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
    </div>
  )
}
