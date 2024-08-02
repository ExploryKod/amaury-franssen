'use client'
import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';
import { LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'fr'] as const;

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    fr: '/a-propos'
  }
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
