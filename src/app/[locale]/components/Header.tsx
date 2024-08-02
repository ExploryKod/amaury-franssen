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
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menuOpenClass, setMenuOpenClass] = useState<string>("");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
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
        <header className="fixed top-0 sm:px-8 px-4 py-2 z-10 w-full bg-background">
          <nav className="px-4 mx-auto max-w-screen-2xl flex justify-between items-center max-container">
            <a href="/" className="text-3xl font-bold">
              Logo
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
              <a href="/">Me contacter</a>
            </div>
            <div
              className={`hidden max-lg:block cursor-pointer grid place-content-center h-10 p-6 ${menuOpenClass}`}

              onClick={ToggleBurgerMenu}
            >
                   <div
                  className="w-10 h-1 bg-black rounded-full transition-all 
                  duration-150 before:content-[''] before:absolute before:w-10 before:h-1 before:bg-black 
                  before:rounded-full before:-translate-y-4 before:transition-all before:duration-150 after:content-[''] 
                  after:absolute after:w-10 after:h-1 after:bg-black 
                  after:rounded-full after:translate-y-4 after:transition-all after:duration-150"
                  >
                  </div>
            </div>
          </nav>
        </header>
        {isMenuOpen && (
          <div>
            <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100 pt-[96px]  ">
              <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-lg text-slate-gray"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                <a
                      href={"/"}
                      className="font-montserrat leading-normal text-lg text-slate-gray"
                    >
                      Me contacter
                    </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </>
    )
}
