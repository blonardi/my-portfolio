import Image from 'next/image'
import SocialPill from '../SocialPill'
import profilePic from '@/app/assets/blonardi-profile.jpeg'
import LinkedinIcon from '@/app/assets/icons/linkedin.svg'
import GithubIcon from '@/app/assets/icons/github.svg'
import MailIcon from '@/app/assets/icons/mail.svg'

export default function Hero(){
	return (
		<main className="w-full lg:max-w-screen-md mx-auto py-40">
			<section className='pb-8'>
				<Image src={profilePic} height={50} width={50} className='rounded-full mb-4' alt="Bautista Lonardi photo" />
				<h1 className="text-white text-5xl font-bold flex flex-row gap-x-4 pb-6">Hey, i am Bautista<a href="https://www.linkedin.com/in/bautista-lonardi/" className="flex justify-center items-center hover:scale-105 transition"
				target="_blank"
				><span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300">Available to work</span></a>
	 			</h1>
				<h2 className="text-2xl text-justify opacity-90">Fullstack developer based in Entre Rios, <span className='inline-block bg-gradient-to-r from-[#73ACDF] via-[#fff] to-[#73ACDF] bg-clip-text text-transparent'>Argentina</span>. I specialized in create special and unique web apps. My stack is Next, Express, some Python and SQL too.. </h2>

				<nav className='flex gap-x-4 mt-8'>
						<SocialPill href="https://www.linkedin.com/in/bautista-lonardi/">
							<Image src={LinkedinIcon} alt="Linkedin Logo" height={24} width={24} />
							Linkedin
						</SocialPill>
						<SocialPill href="https://github.com/blonardi">
							<Image src={GithubIcon} alt="Linkedin Logo" height={24} width={24} />
							Linkedin
						</SocialPill>
						<SocialPill href="https://github.com/blonardi">
							<Image src={MailIcon} alt="Linkedin Logo" height={26} width={26} />
							lonardibautista@gmail.com
						</SocialPill>
				</nav>
			</section>

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