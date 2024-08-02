'use client'
import {createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'fr'] as const;

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/about': {
    en: '/about',
    fr: '/a-propos'
  }
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
