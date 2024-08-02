'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
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
    { href: "#about", label: "Mon parcours" },
    { href: "#skills", label: "Mes compétences" },
    { href: "#projects", label: "Mes projets" },
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
              Logo
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 text-lg leading-normal font-medium max-lg:hidden wide:mr-24">
              <a href="#contact"><Button rounded size='medium'>{t('intro_left_btn')}</Button></a>
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
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-5">
              <a
                    href={"/"}
                    className="leading-normal text-lg text-slate-gray"
                  >
                    <a href="#contact"><Button rounded size='medium'>{t('intro_left_btn')}</Button></a>
                  </a>
              </li>
            </ul>
          </nav>
        </div>
        
      </>
    )
}
