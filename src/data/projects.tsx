// Projects images (front)
import FoodcareFront from '/public/projects/foodcare-front.webp'
import ThreeJsIcon from '/public/skills/threedotjs.svg'
import AnoriaFront from '/public/projects/anoria-front.png'
import ChatTalksFront from '/public/projects/chat_talks.png'
import ecoMirrorFront from '/public/projects/ecomirror.webp';
import insureFront from '/public/projects/insure-front.webp';
import happyFormFront from '/public/projects/happy-form.png';
import phpImg from '/public/skills/php.svg';
import GoImg from '/public/skills/go.svg'
import nodeImg from '/public/skills/nodejsDark.svg'


// SKILLS
import reactIcon from '/public/skills/react.svg'
import JavaScriptImg from '/public/skills/javaScript.svg'
import css3Img from '/public/skills/css-3.svg'
import html5Img from '/public/skills/html-5.svg'

// Types
import type { ImageContainer, Project } from '../types/project/project'

const foodcarStack:ImageContainer[] = [
    {id:1, url: reactIcon, alt: 'React Js'},
    {id:1, url: nodeImg, alt: 'Node Js'},
]

const anoriaStack:ImageContainer[] = [
    {id:1, url: ThreeJsIcon, alt: 'Three Js'},
]

const catStack:ImageContainer[] = [
    {id:1, url: reactIcon, alt: 'React Js'},
    {id:1, url: GoImg, alt: 'Golang'},
]

const ecoMirrorStack:ImageContainer[] = [
    {id:1, url: JavaScriptImg, alt: 'JavaScript'},
]

const insureStack:ImageContainer[] = [
    {id:1, url: css3Img, alt: 'CSS3'},
    {id:2, url: html5Img, alt: 'HTML5'},
]

const happyFormStack:ImageContainer[] = [
    {id:1, url: css3Img, alt: 'CSS3'},
    {id:2, url: html5Img, alt: 'HTML5'},
    {id:2, url: phpImg, alt: 'PHP7.4'},
    {id:2, url: JavaScriptImg, alt: 'JavaScript'},
]

export const projects: Partial<Project[] | null> = [
    {
        id:1,
        category: 'Personnel', 
        website: "https://gleeful-sorbet-733e50.netlify.app", 
        github: "https://github.com/ExploryKod/Foodcare", 
        title:"Foodcare", 
        description: '', 
        image: {url: FoodcareFront, alt:" "}, 
        technos: [...foodcarStack],
        year: "2022",
        slug: "foodcare",
        usecases: {javascript: "javascript"}
    },
    {   
        id:2,
        category: 'Personnel', 
        website: "https://anoria.vercel.app", 
        github:"https://github.com/ExploryKod/Anoria", 
        title:"Anoria City Builder", 
        description: '', 
        image: {url: AnoriaFront, alt:" "},  
        technos: [...anoriaStack],
        year: "2024"
    },
    {
        id:3,
        category: 'Formation', 
        website: "https://chat-talks-client.vercel.app", 
        github:"https://github.com/ExploryKod/chatTalksDocker", 
        title:"Cat Talks", 
        description: '', 
        image: {url: ChatTalksFront, alt:" "},  
        technos: [...catStack],
        year: "2024",
        slug: "cat-talks",
        usecases: {typescript: "typescript", websockets: "websockets", golang:"golang"}
    },
    {
        id:4,
        category: 'Formation', 
        website: "https://eco-mirror.vercel.app/", 
        github:"https://github.com/ExploryKod/Eco-Mirror", 
        title:"Eco Mirror", 
        description: '', 
        image: {url: ecoMirrorFront, alt:" "},  
        technos: [...ecoMirrorStack],
        year: "2022"
    },
    {
        id:5,
        category: 'Défi Frontend mentor', 
        website: "https://charming-marzipan-2d510b.netlify.app/", 
        github:"https://github.com/ExploryKod/Insure-landing-page-challenge", 
        title:'Landing Page', 
        description: '', 
        image: {url: insureFront, alt:" "},  
        technos: [...insureStack],
        year: "2022"
    },
    {
        id:6,
        category: 'Personnel', 
        website: "https://happy-form-mvc.onrender.com/", 
        github:"https://github.com/ExploryKod/Happy_form_MVC", 
        title:'Happy Form', 
        description: '', 
        image: {url: happyFormFront, alt:" "},  
        technos: [...happyFormStack],
        year: "2022"
    }
  ]  