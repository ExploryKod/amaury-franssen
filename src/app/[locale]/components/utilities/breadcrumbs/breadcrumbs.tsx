'use client';

import { Children, useState, type ReactNode, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { BreadCrumbsContext } from './breadcrumbContext';
import Link from 'next/link';
import { Spinner } from './spinner';

type BreadcrumbsContainerProps = {
  children: ReactNode;
  separator?: string | ReactNode;
}

type BreadcrumbsProps = {
  children: ReactNode;
  withHome?: boolean;
  locale: string 
}

type BreadcrumbItemProps = {
  children: ReactNode;
  href: string;
}

const BreadcrumbsItem = ({
  children,
  href,
  ...props
}: BreadcrumbItemProps) => {
  return (
    <li {...props}>
      <Link href={href} passHref>
        {children}
      </Link>
    </li>
  );
};

const BreadcrumbsContainer = ({
  children,
  separator = '>',
}: BreadcrumbsContainerProps) => {
    const paths = usePathname();

return (
  <nav className="mt-5 p-4 pt-[100px] min-h-6">
    <ol className="flex items-center space-x-4">
      {Children.map(children, (child, index) => (
        <>
          {child}
          {index < Children.count(children) - 1
            ? <span>{separator}</span>
            : null}
        </>
      ))}
    </ol>
  </nav>)
}

export const BreadCrumbs = ({
  children,
  withHome = false,
  locale
}: BreadcrumbsProps) => {
  const paths = usePathname();
  const [trailingPath, setTrailingPath] = useState('');
  const context = useMemo(() => ({
    trailingPath,
    setTrailingPath,
  }), [trailingPath]);

  const pathNames = paths.split('/').filter((path) => path);
  const pathItems = pathNames
    .map((path, i) => ({
      name: path,
      path: pathNames.slice(0, i + 1).join('/'),
    }));

  if (context.trailingPath && pathItems.length > 0 && context.trailingPath !== pathItems[pathItems.length - 1].name) {
    pathItems[pathItems.length - 1].name = context.trailingPath;
  }

  return (
    <>
      <BreadcrumbsContainer>
        {(withHome && paths !== `/${locale}`) && <BreadcrumbsItem href="/">Home</BreadcrumbsItem>}
        {pathItems.filter(item => item.path !== locale).map((item) => (
          <BreadcrumbsItem key={item.path} href={`/${item.path}`}>
            {item.name === 'loading'
              ? <Spinner className="w-4 h-4" />
              : item.name}
          </BreadcrumbsItem>
        ))}
      </BreadcrumbsContainer>
      <BreadCrumbsContext.Provider value={context}>
        {children}
      </BreadCrumbsContext.Provider>
    </>
  );
};