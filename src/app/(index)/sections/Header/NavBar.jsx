import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import NavTag from './Components/NavTag'
import Image from 'next/image'
import profilePic from '@/app/assets/blonardi-profile.png'
import { useState } from 'react'

export default function NavBar() {
	const [navBar, setNavBar] = useState(false)
	const displayNavbar = () => {
		setNavBar(!navBar)
	}

	const LINKS = [
		{
			name: 'home',
			href: '',
			fn: setNavBar
		},
		{
			name: 'about',
			href: '/#about',
			fn: setNavBar
		},
		{
			name: 'projects',
			href: '/#projects',
			fn: setNavBar
		},
		{
			name: 'resume',
			href: 'https://drive.google.com/file/d/1zyAFLw0rVwZGUxpwEr3LNxlBcQ3viHpG/view?usp=drive_link',
			fn: setNavBar
		},
		{
			name: 'contact',
			href: '/#contact',
			fn: setNavBar
		},
	]

	return (
		<>
			<section className='w-full md:auto'>
				<nav>
					<div className='flex items-center justify-between w-full px-8 md:hidden'>
						<Link href='/'>
							<Image src={profilePic} height={50} width={50} className='mb-4 rounded-full shadow-lg shadow-slate-300' alt="Bautista Lonardi photo" />
						</Link>
						<div>
							<button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border hover:bg-gray-800 focus:outline-none" onClick={displayNavbar} aria-expanded={navBar}>
								{navBar ? (
									<figure className='cursor-pointer'>
										{/*<Image src={close} width={30} height={30} alt='Close button' />*/}
										<XMarkIcon className='w-6 h-6 text-blue-500' />
									</figure>
								) :
									(
										<figure className='cursor-pointer'>
											{/*<Image src={hamburguer} width={30} height={30} alt='Open button' />*/}
											<Bars3Icon className="w-6 h-6 text-blue-500" />
										</figure>
									)}
							</button>
						</div>
					</div>

					<div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${navBar ? 'p-12 md:p-0 block h-full' : 'hidden'
						}`}>
						<div className='flex flex-col items-center justify-between mx-auto gap-y-2 lg:flex-row lg:gap-x-10'>
							<ul className="justify-center h-screen md:mx-auto w-[80%] md:h-auto md:flex">
								{LINKS.map(link => (
									<li key={link.name} className="py-4 text-xl text-center text-white border-b-2 border-purple-900 md:px-6 md:border-b-0 hover:bg-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
										<NavTag href={link.href} onClick={link.fn}>{link.name}</NavTag>
									</li>
								))}
							</ul>
						</div>
					</div>
				</nav>
			</section>
		</>
	)
}