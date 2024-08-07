'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import Image from 'next/image'
import brand from '@/public/corporate/brand_bgno.webp'
import LangSwitcher from '../LangSwitcher'
import Button from '../Button';

interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menuOpenClass, setMenuOpenClass] = useState<string>("");

  

  const navLinks = [
    // { href: `/${locale}/#about`, label: 'Mon_parcours' },
    { href: `/${locale}/#skills`, label: 'Mes_compétences' },
    { href: `/${locale}/#projects`, label: 'Mes_projets' },
  ];

  const ToggleBurgerMenu = () => {
   
    if(!isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
      setMenuOpenClass("hamburger-toggle") 
    } else {
      setIsMenuOpen(!isMenuOpen);
      setMenuOpenClass("")
    }
  }

    return (
        <>
        <header className="top-0 z-max fixed border-1 bg-background p-4 border border-background-secondary w-full h-[96px]">
          <nav className="flex justify-end items-center gap-4 mx-auto max-w-screen-2xl max-container">
            <a href="/" className="font-bold text-3xl max-xl:grow">
                <Image
                  src={brand}
                  alt="Amaury Franssen"
                  blurDataURL="blur"
                  placeholder="blur" // Optional blur-up while loading
                />
          </a>
          <div className="lg:hidden">
            <LangSwitcher />
          </div>
            <ul className="flex flex-1 justify-end xl:justify-center items-center gap-16 max-lg:hidden me-5">
              {navLinks.map((item) => (
                <li key={item.label} className="whitespace-nowrap">
                  <a
                    href={item.href}
                    className="relative after:right-[50%] before:-bottom-2 after:-bottom-2 before:left-[50%] before:absolute after:absolute before:bg-primary after:bg-primary before:w-0 hover:before:w-[50%] after:w-0 hover:after:w-[50%] before:h-[2px] after:h-[2px] text-button hover:text-primary before:origin-center after:origin-center transition-all before:transition-[width] after:transition-[width] before:duration-700 cursor-pointer ease-in-out before:ease-in-out after:ease-in-out after:duration-700"
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
         
            <div className="flex justify-end gap-2 max-lg:hidden wide:mr-24 font-medium text-lg">
              <LangSwitcher />
              <a href={`/${locale}/#contact`}><Button rounded size='medium'>{t('header_end_btn')}</Button></a>
            </div>
          
            <div
              className={`hidden max-lg:block cursor-pointer grid place-content-center h-10 ${menuOpenClass}`}

              onClick={ToggleBurgerMenu}
            >
                   <div
                  className="before:absolute after:absolute before:content-[''] after:content-[''] bg-button before:bg-button after:bg-button rounded-full before:rounded-full after:rounded-full w-10 before:w-10 after:w-10 h-[6px] before:h-[6px] after:h-[6px] transition-all before:transition-all after:transition-all before:-translate-y-4 after:translate-y-4 duration-150 before:duration-150 after:duration-150"
                  >
                  </div>
            </div>
          </nav>
        </header>

        <div className={`ease-in ${isMenuOpen ? 
                        "fixed top-[96px] bottom-0 left-0 right-0 lg:hidden z-sub-header translate-y-0 opacity-1 event-auto" : 
                        "static -translate-y-[100%] h-0 opacity-0 event-none"}`}>
            <nav className={`h-full transition-translate duration-300 delay-100 ${isMenuOpen  ? 
                          "pt-[96px] bg-background-secondary translate-y-0 opacity-1 event-auto" : 
                          "-translate-y-[100%] opacity-0 event-none"}`}>
              <ul className="flex flex-col gap-5 lg:hidden px-5 py-5 h-full">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-lg text-slate-gray leading-normal"
                    >
                      {t(item.label)}
                    </a>
                  </li>
                ))}
                <li className="mt-5">
                <a
                      href={"mailto:amauryfranssen@gmail.com"}
                      className="text-lg text-slate-gray leading-normal"
                    >
                      <Button rounded size='medium'>{t('header_end_btn')}</Button>
                    </a>
                </li>
              </ul>
          </nav>
        </div>
        
      </>
    )
}
