type ProjectExample = {
    id: number
    title: string
    image: string | StaticImport
    description: string
    slug: string
    points: Array<string>
  }
  
type Skill = {
    id: number
    text: string
    description?: string
    image?: string | StaticImport
    example?: ProjectExample
    category?: string
    link?: string
    linkIcon?: React.FC<React.SVGProps<SVGSVGElement>>
  }
  
type UseCaseImg = { md: {h:number, w:number}, lg: {h:number, w:number}}