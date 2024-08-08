<a href="https://www.flaticon.com/free-icons/uk-flag" title="uk flag icons">Uk flag icons created by Freepik - Flaticon</a>

import { useTranslations } from 'next-intl'

export default function Credits() {
  const t = useTranslations('')
  return (
    <div className="px-4">
        <section id="credits" className='flex flex-col gap-3 md:gap-[20px] mx-auto md:py-5 w-full max-w-screen-2xl min-h-hero'>
            <div className="mx-auto max-w-[1200px]">
                <h1 className="my-2 text-3xl text-primary">{t('credit_title')}</h1>
                <ul className="flex flex-col gap-3">
                    <h2 className="my-5 font-bold text-2xl">{t('credit_flags')}</h2>
                    <li> <a className="underline hover:primary" href="https://www.flaticon.com/free-icons/uk-flag" title="uk flag icons">Uk flag icons created by Freepik - Flaticon</a></li>
                    <li><a className="underline hover:primary"  href="https://www.flaticon.com/free-icons/france" title="france icons">France icons created by Freepik - Flaticon</a></li>
                    <li><a className="underline hover:primary" href="https://www.flaticon.com/free-icons/spain" title="spain icons">Spain icons created by amoghdesign - Flaticon</a></li>
                    <h2 className="my-5 font-bold text-2xl" >{t('other_icons')}</h2> 
                    <li>
                      Breadcrumbs icon: <a href="https://iconscout.com/icons/breadcrumb" className="font-size-sm hover:text-primary underline" target="_blank">breadcrumb</a> 
                      by <a href="https://iconscout.com/contributors/aozora" className="font-size-sm hover:text-primary underline" target="_blank">Aozora</a></li>
                    <li></li> 
                </ul>
            </div>
        </section>
    </div>
  )
}
