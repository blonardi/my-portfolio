import react from '@/app/assets/icons/react.svg'
import next from '@/app/assets/icons//next.svg'
import bootstrap from '@/app/assets/icons/bootstrap.svg'
import cheerio from '@/app/assets/icons/cheerio.svg'
import tailwind from '@/app/assets/icons/tailwind.svg'
import javascript from '@/app/assets/icons/javascript.svg'
import mongodb from '@/app/assets/icons/mongodb.svg'
import express from '@/app/assets/icons/express.svg'
import githubIcon from '@/app/assets/icons/github.svg'
import codeIcon from '@/app/assets/icons/code.svg'
//images
import argynews from '@/app/assets/images-projects/argynews-card.webp'
import cultura from '@/app/assets/images-projects/cultura-card.webp'

import Image from "next/image"
import SocialPill from '../Hero/SocialPill'

export default function ProjectList() {
	const TAGS = {
		//HTML:{name:"",class:"",icon:()},
		REACT: {
			name: 'React',
			class: 'bg-[#475569] text-white',
			icon: react,
		},
		NEXT: {
			name: 'Next.js',
			class: 'bg-[#475569] text-white',
			icon: next
		},
		JAVASCRIPT: {
			name: 'Javascript',
			class: 'bg-[#475569] text-white',
			icon: javascript
		},
		BOOTSTRAP: {
			name: 'Bootstrap',
			class: 'bg-[#475569] text-white',
			icon: bootstrap,
		},
		CHEERIO: {
			name: 'Cheerio',
			class: 'bg-[#475569] text-[rgb(232, 140, 31)]',
			icon: cheerio
		},
		TAILWIND: {
			name: 'TailwindCSS',
			class: 'bg-[#475569] text-[#73bcf6]',
			icon: tailwind
		},
		EXPRESS: {
			name: 'Express',
			class: 'bg-[#475569] text-white',
			icon: express,
		},
		MONGODB: {
			name: 'MongoDB',
			class: 'bg-[#475569] text-[#01EC64]',
			icon: mongodb
		}
	}
	const PROJECTS = [
		{
			title: 'Argy News',
			description: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
			link: 'https://argynews.vercel.app/',
			github: 'https://github.com/blonardi/argynews-scraper',
			img: argynews,
			technologies: [TAGS.REACT, TAGS.EXPRESS, TAGS.BOOTSTRAP, TAGS.CHEERIO]
		},
		{
			title: 'Culturas y Raices',
			description: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
			link: 'https://antoninosartori.github.io/culturas-raices-kumpel/',
			github: 'https://github.com/antoninosartori/culturas-raices-kumpel',
			img: cultura,
			technologies: [TAGS.BOOTSTRAP, TAGS.JAVASCRIPT]
		},
		{
			title: 'Kumpel Inmobiliaria',
			description: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
			link: '#',
			github: '#',
			img: argynews,
			technologies: [TAGS.NEXT, TAGS.TAILWIND, TAGS.EXPRESS, TAGS.MONGODB]
		},
		{
			title: 'Proyecto 1',
			description: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
			link: '#',
			github: '#',
			img: cultura,
			technologies: [TAGS.NEXT, TAGS.TAILWIND, TAGS.EXPRESS, TAGS.MONGODB]
		},
	]
	return (
		<>
			<section className="grid items-start justify-center grid-cols-1 gap-8 rounded-lg md:grid-cols-2">
				{PROJECTS.map(({ index, title, description, link, github, img, technologies }) => (
					<article key={index} className="h-full overflow-hidden shadow-xl shadow-slate-100/10">
						<a href={link}>
							<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="rounded-lg" src={img} alt={`${title} img`} />
						</a>
						<div className="flex flex-col justify-between gap-2 p-4 text-wrap">
							<h3 className="text-2xl font-semibold text-orange-300">{title}</h3>
							<div className='h-full min-h-24 grow'>
								<ul className="flex flex-wrap items-center p-2 mb-2 text-center rounded-sm gap-y-2 gap-x-6 ">
									{technologies.map(tech => (
										//console.log(tech)
										<li className={`rounded-full shadow-xl shadow-slate-600 ${tech.class}`} key={tech.name}>
											<div className='flex items-center justify-center px-2 py-1 gap-x-1'>
												<Image src={tech.icon} width={24} height={24} alt={tech.name} />
												<span className={`rounded-full gap-x-2 `}>
													{tech.name}
												</span>
											</div>
										</li>

									))}
								</ul>
							</div>
							<p className="text-lg text-pretty">{description}</p>
							<div className='flex items-center justify-around gap-x-4'>
								<SocialPill link={github}><Image src={codeIcon} width={24} height={24} alt="Link to Github repo" /><span>Code</span></SocialPill>
								<SocialPill link={link}><Image src={githubIcon} width={24} height={24} alt="Link to deploy" /><span>Deploy</span></SocialPill>
							</div>
						</div>
					</article>
				))}
			</section>
		</>
	)
}