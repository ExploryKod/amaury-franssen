import { useTranslations } from 'next-intl'

export const Footer = ({locale}: any) => {
  const t = useTranslations('')

  return <div className="relative mt-5 p-0 w-full min-h-[30px] bg-button">
      <div className="mx-auto max-w-screen-2xl px-5 py-4 flex flex-row items-center gap-4">
        <div><span className="text-white text-sm">Portfolio &copy; 2024 - All rights reserved</span></div>
        <div className="grow flex items-center justify-center">
          <a className="text-white text-sm hover:underline" href={`/${locale}/credits`}>{t('footer_link_credits')}</a>
        </div>
      </div>
  </div>
}
