'use client'
import './hero.css'; // Asegúrate de importar el archivo de estilo
import Image from 'next/image'
import profilePic from '@/app/assets/blonardi-profile.jpeg'
import SocialPill from './SocialPill'
import SectionContainer from '../SectionContainer'
import LinkedinIcon from '@/app/assets/icons/linkedin.svg'
import GithubIcon from '@/app/assets/icons/github.svg'
import MailIcon from '@/app/assets/icons/mail.svg'

export default function Hero() {
	return (
		<main>
			<SectionContainer id="about" newClass='py-8 md:py-40 pb-32'>
				<figure>
					<Image src={profilePic} height={50} width={50} className='hidden mb-4 rounded-full md:block' alt="Bautista Lonardi photo" />
				</figure>
				<h1 className="flex flex-row pb-6 text-2xl font-bold text-white lg:text-5xl gap-x-4">Hey, i am Bautista<a href="https://www.linkedin.com/in/bautista-lonardi/" className="flex items-center justify-center transition hover:scale-105"
					target="_blank"
				><span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300 text-pretty"><span className="blinking-circle"></span> Available to work</span></a>
				</h1>
				<h2 className="text-lg text-justify lg:text-2xl opacity-90">Fullstack developer based in Entre Rios, <span className='inline-block bg-gradient-to-r from-[#73ACDF] via-[#fff] to-[#73ACDF] bg-clip-text text-transparent'>Argentina</span>. I specialized in create special and unique web apps. My stack is Next, Express, some Python and SQL too.. </h2>

				<nav className='flex flex-col mt-8 lg:flex-row gap-y-3 lg:gap-x-4 lg:gap-y-0'>
					<SocialPill href="https://www.linkedin.com/in/bautista-lonardi/">
						<Image src={LinkedinIcon} alt="Linkedin Logo" height={24} width={24} />
						Linkedin
					</SocialPill>
					<SocialPill href="https://github.com/blonardi">
						<Image src={GithubIcon} alt="Linkedin Logo" height={24} width={24} />
						Linkedin
					</SocialPill>
					<SocialPill href="mailto:lonardibautista@gmail.com">
						<Image src={MailIcon} alt="Linkedin Logo" height={26} width={26} />
						lonardibautista@gmail.com
					</SocialPill>
				</nav>
			</SectionContainer>
			{/*<section>
				<span className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">React</span>
				<span className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400 inline-flex items-center justify-center">Next</span>
				<span className="bg-green-100 hover:bg-green-200 text-green-800 text-sm font-medium me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 inline-flex items-center justify-center">MongoDB</span>
				<span className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 text-sm font-medium me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400 inline-flex items-center justify-center">Python</span>
				<span className="bg-sky-100 hover:bg-sky-200 text-sky-800 text-sm font-medium me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-sky-400 border border-sky-400 inline-flex items-center justify-center">SQL</span>
			</section>*/}
		</main>
	)
}