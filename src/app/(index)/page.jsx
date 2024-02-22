'use client'

import Container from './sections/Container'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Timeline from './sections/Timeline'
export default function page() {
	return (
		<>
			<Container id='main'>
				<Header />
				<Hero />
				<Projects />
				{/*<div>Technologies</div>*/}
				<Timeline />
			</Container>
		</>
	)
}


