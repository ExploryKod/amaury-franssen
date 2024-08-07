import { type StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface ImageContainer {
    id?: number
    url: string | StaticImport
    alt?: string
}

export interface Usecases {
 [key: string]: string
}

export type Project = {
  id?: number
  description?: string
  image?: ImageContainer
  technos: ImageContainer[] | []
  website?: string
  category?: string
  github?: string
  pageUrl?: string
  linkIcon?: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  year?: string
  slug?: string
  usecases?: Usecases
} 