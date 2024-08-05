import FoodcareFront from '/public/projects/foodcare-front.webp'
import ThreeJsIcon from '/public/skills/threedotjs.svg'
import AnoriaFront from '/public/projects/anoria-front.png'
import ChatTalksFront from '/public/projects/chat_talks.png'
import reactIcon from '/public/skills/react.svg'
import type { ImageContainer, Project } from '../types/project/project'

const foodcarStack:ImageContainer[] = [
    {id:1, url: reactIcon, alt: 'React Js'},
]

const anoriaStack:ImageContainer[] = [
    {id:1, url: ThreeJsIcon, alt: 'Three Js'},
]

const catStack:ImageContainer[] = [
    {id:1, url: reactIcon, alt: 'React Js'},
]

export const projects: Partial<Project[] | null> = [
    {id:1,category: 'Personnel', website: "https://gleeful-sorbet-733e50.netlify.app", github: "https://github.com/ExploryKod/Foodcare", title:"Foodcare", description: 'Foodcare est un site', image: {url: FoodcareFront, alt:" "}, technos: [...foodcarStack]},
    {id:2,category: 'Personnel', website: "https://anoria.vercel.app", github:"https://github.com/ExploryKod/Anoria", title:"Anoria City Builder", description: 'Anoria: un village', image: {url: AnoriaFront, alt:" "},  technos: [...anoriaStack]},
    {id:3,category: 'Formation', website: "https://chat-talks-client.vercel.app", github:"https://github.com/ExploryKod/chatTalksDocker", title:"Cat Talks", description: 'React', image: {url: ChatTalksFront, alt:" "},  technos: [...catStack]}
  ]  