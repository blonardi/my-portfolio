import React from 'react'
import NavTag from './Components/NavTag'

export default function Header() {
	return (
		<header className='flex justify-center items-center py-8 w-full'>
			<section>
				<nav className='flex flex-row gap-x-10 justify-between mx-auto'>
					<NavTag>home</NavTag>
					<NavTag>projects</NavTag>
					<NavTag>about</NavTag>
					<NavTag>resume</NavTag>
					<NavTag>contact</NavTag>
				</nav>
			</section>
		</header>
	)

{/*<header className="my-8 w-[90%] mx-auto overflow-hidden max-w-screen-xl text-gray-400 bg-header body-font shadow-2xl hover:shadow-lg hover:shadow-slate-600 rounded-xl transition-all z-50">
    <nav className="p-6 md:flex md:flex-wrap md:items-center md:justify-between text-base">
			<div className="flex flex-row items-center justify-between">
	    	<a className="flex title-font font-medium my-auto mx-0 items-center text-white md:mb-4 lg:mb-0">
				<Image  width={48} height={48} src={logoKumpel} className='rounded-full' alt="Logo Kumpel" />
	      <span className="ml-3 text-2xl text-slate-500">Kumpel Inmuebles</span>
	    	</a>
			</div>

			<div className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
				<a className="mr-5 text-slate-500 hover:text-lime-700 hover:cursor-pointer">Inicio</a>
	      <a className="mr-5 text-slate-500 hover:text-lime-700 hover:cursor-pointer">Inmuebles</a>
	      <a className="mr-5 text-slate-500 hover:text-lime-700 hover:cursor-pointer">Nosotros</a>
	      <a className="mr-5 text-slate-500 hover:text-lime-700 hover:cursor-pointer">Contacto</a>

				<button className="
				py-2 px-4 border rounded-md text-lime-700 bg-white hover:bg-lime-700 hover:text-white
				">Log In</button>
			</div>
	   </nav>
			
	</header>*/}
	
}
