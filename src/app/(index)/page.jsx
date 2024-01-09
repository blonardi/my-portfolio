'use client'

import Header from './components/Header/Header'
export default function page() {
	return (
		<>
			<section className="w-full h-screen bg-background2 flex justify-center items-center">
				<section className="lg:max-w-5xl h-full max-w-full min-w-64 bg-slate-400 text-white">
					<Header />
					<div>Hero</div>	
					<div>Projects</div>	
					<div>Technologies</div>	
					<div>Footer</div>	
				</section>
			</section>
		</>
	)
}
