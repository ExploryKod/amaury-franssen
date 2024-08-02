'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import Image from 'next/image'
import ImageContainer from './ImageContainer'
import brand from '@/public/brand_bgno.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import GithubIcon from '../../icons/github'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import Button from './Button';
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menuOpenClass, setMenuOpenClass] = useState<string>("");

  const navLinks = [
    { href: "#about", label: 'Mon_parcours' },
    { href: "#skills", label: 'Mes_compétences' },
    { href: "#projects", label: 'Mes_projets' },
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
        <header className="h-[96px] fixed top-0 p-4 z-10 w-full bg-background">
          <nav className="mx-auto max-w-screen-2xl flex justify-between items-center max-container">
            <a href="/" className="text-3xl font-bold">
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
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="relative text-button hover:text-primary cursor-pointer transition-all 
                    ease-in-out before:transition-[width] before:ease-in-out before:duration-700 
                    before:absolute before:bg-primary before:origin-center before:h-[2px] before:w-0 
                    hover:before:w-[50%] before:-bottom-2 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 
                    after:absolute after:bg-primary after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:-bottom-2 after:right-[50%]"
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
         
            <div className="flex gap-2 text-lg font-medium max-lg:hidden wide:mr-24">
              <LangSwitcher />
              <a href="#contact"><Button rounded size='medium'>{t('header_end_btn')}</Button></a>
            </div>
          
            <div
              className={`hidden max-lg:block cursor-pointer grid place-content-center h-10 ${menuOpenClass}`}

              onClick={ToggleBurgerMenu}
            >
                   <div
                  className="
                  w-10 h-[6px] bg-button rounded-full transition-all duration-150 
                  before:content-[''] before:absolute before:w-10 before:h-[6px] before:bg-button before:rounded-full 
                  before:-translate-y-4 before:transition-all before:duration-150 
                  after:content-[''] after:absolute after:w-10 after:h-[6px] after:bg-button 
                  after:rounded-full after:translate-y-4 after:transition-all after:duration-150"
                  >
                  </div>
            </div>
          </nav>
        </header>

        <div className={`${isMenuOpen ? "h-full opacity-1" : "h-0 opacity-0"}`}>
            <nav className={`${isMenuOpen  ? "fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-background-secondary pt-[96px]": ""}`}>
            <ul className="lg:hidden flex flex-col h-full px-5 py-5 gap-5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="leading-normal text-lg text-slate-gray"
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
              <li className="mt-5">
              <a
                    href={"#contact"}
                    className="leading-normal text-lg text-slate-gray"
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
