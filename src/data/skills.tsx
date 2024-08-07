import JavaScriptImg from '/public/skills/javaScript.svg'
import ReactImg from '/public/skills/react.svg'
import dockerImg from '/public/skills/docker-icon.svg'
import drupalImg from '/public/skills/drupal.svg'
import flaskImg from '/public/skills/flask.svg'
import laravel from '/public/skills/laravel.svg'
import mysql from '/public/skills/mysql.svg'
import TypeScriptImg from '/public/skills/typescript-icon.svg'
import nextImg from '/public/skills/nextjs-icon.svg'
import tailwindcss from '/public/skills/tailwindcss-icon.svg'
import wordpressImg from '/public/skills/wordpress-icon.svg'
import GoImg from '/public/skills/go.svg'
import phpImg from '/public/skills/php.svg';
import nodeImg from '/public/skills/nodejsDark.svg'

import FoodcareFront from '/public/projects/foodcare-front.webp'
import ThreeJsIcon from '/public/skills/threedotjs.svg'
import AnoriaFront from '/public/projects/anoria-front.png'
import ChatTalksFront from '/public/projects/chat_talks.png'
import ecoMirrorFront from '/public/projects/ecomirror.webp';
import insureFront from '/public/projects/insure-front.webp';
import happyFormFront from '/public/projects/happy-form.png';
  
const catTypeScriptExample: ProjectExample = {id: 1, title:"Cat Talks", image: ChatTalksFront, description:"Ce projet met en jeu TypeScript", points: [], slug: "cat-talks" }

export const skills: Partial<Skill[] | null> = [
{id: 1, text: 'TypeScript', image: TypeScriptImg, example: catTypeScriptExample},
{id: 2, text: 'React', image: ReactImg, example: catTypeScriptExample},
{id: 3, text: 'NextJs', image: nextImg, },
{id: 4, text: 'Tailwindcss', image: tailwindcss},
{id: 5, text: 'Docker', image: dockerImg},
{id: 6, text: 'Wordpress', image: wordpressImg, example: catTypeScriptExample},
{id: 7, text: 'Golang', image: GoImg, example: catTypeScriptExample},
// {id: 8,text: 'Flask', image: flaskImg},
{id: 10, text: 'Laravel', image: laravel},
{id:11, text: 'MySQL', image: mysql},
// {id: 12, text: 'PHP', image: phpImg},
] || null