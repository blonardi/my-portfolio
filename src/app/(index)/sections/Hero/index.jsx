'use client'
import './hero.css'; // Asegúrate de importar el archivo de estilo
import Image from 'next/image'
import profilePic from '@/app/assets/blonardi-profile.png'
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
						Github
					</SocialPill>
					<SocialPill href="mailto:lonardibautista@gmail.com">
						<Image src={MailIcon} alt="Linkedin Logo" height={26} width={26} />
						lonardibautista@gmail.com
					</SocialPill>
				</nav>
			</SectionContainer>
		</main>
	)
}