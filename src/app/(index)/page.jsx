'use client'

import Header from './components/Header'
import Hero from './components/Hero'
export default function page() {
	return (
		<>
			<section className="w-full lg:max-w-screen-lg flex flex-col justify-center mx-auto text-white opacity-90">
				<Header />
				<Hero /	>
				{/*<div>Projects</div>	
				<div>Technologies</div>*/}
			</section>
		</>
	)
}


