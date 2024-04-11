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
			type: 'Project',
			description: 'News website scraped with Node.js',
			link: 'https://argynews.vercel.app/',
			github: 'https://github.com/blonardi/argynews-scraper',
			img: argynews,
			technologies: [TAGS.REACT, TAGS.EXPRESS, TAGS.BOOTSTRAP, TAGS.CHEERIO]
		},
		{
			title: 'Culturas y Raices',
			type: 'Work',
			description: 'Contact site and sale of touristic packages',
			link: 'https://antoninosartori.github.io/culturas-raices-kumpel/',
			github: 'https://github.com/antoninosartori/culturas-raices-kumpel',
			img: cultura,
			technologies: [TAGS.BOOTSTRAP, TAGS.JAVASCRIPT]
		},
		{
			title: 'Kump Inmobiliaria',
			type: 'Project',
			description: 'Web site of real estate in Entre Rios',
			excerpt: "Kumpel Inmobiliaria es un proyecto personal enfocado en mostrar propiedades en la provincia de Entre Ríos. La plataforma permite a los usuarios explorar una variedad de inmuebles, desde residenciales hasta comerciales, con detalles claros y fotos de calidad. Ofrecemos una navegación fácil y amigable para ayudar a los interesados a encontrar la propiedad que se ajuste a sus necesidades.",
			link: 'https://inmobiliarias-next.vercel.app/',
			github: 'https://github.com/blonardi/inmobiliarias-next',
			img: argynews,
			technologies: [TAGS.NEXT, TAGS.TAILWIND, TAGS.EXPRESS, TAGS.MONGODB]
		},
		{
			title: 'Carlos Icardi',
			type: 'Work',
			description: 'Portfolio de Carlos Icardi: Consultoría en Gestión Empresarial',
			excerpt: "We carried out the development of a web portfolio for Carlos Icardi, an expert in business management consulting. We worked closely with tickets de Jira, using agile methodology for task management and ensuring efficient execution. We used Astro.js technology to optimize the loading speed and user experience of the site. We created specific branches for each task, allowing a precise and organized implementation of the functionalities. The result is a modern and attractive platform that highlights Carlos Icardi's professional experience and innovative approach in his field.",
			link: 'https://carlosicardi.com.ar/',
			github: 'https://github.com/antoninosartori/carlos-icardi',
			img: cultura,
			technologies: [TAGS.NEXT, TAGS.TAILWIND, TAGS.EXPRESS, TAGS.MONGODB]
		},
	]
	return (
		<>
			<section className="grid items-start justify-center grid-cols-1 gap-8 rounded-lg md:grid-cols-2">
				{PROJECTS.map(({ index, title, type, description, link, github, img, technologies }) => (
					<article key={index} className="h-full overflow-hidden transition-all duration-500 transform shadow-md hover:scale-105 hover:shadow-lg shadow-slate-100/10">
						<a className='relative block h-[200px]' href={link}>
							<Image
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: '200px' }}
								className="object-cover rounded-lg"
								src={img}
								alt={`${title} img`}
							/>
						</a>
						<div className="flex flex-col justify-between gap-2 p-4 text-wrap">
							<section className='flex items-center justify-between gap-x-2'>
								<h3 className="text-2xl font-semibold text-orange-600">{title}</h3>
								<span className={`rounded-full shadow-md shadow-slate-500 px-2 py-1 max-w-min font-semibold`}>{type}</span>
							</section>
							<div className='h-full min-h-24 grow'>
								<ul className="flex flex-wrap items-center p-2 mb-2 text-center rounded-sm gap-y-2 gap-x-6 ">
									{technologies.map(tech => (
										//console.log(tech)
										<li className={`rounded-full shadow-md shadow-slate-500 ${tech.class}`} key={tech.name}>
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