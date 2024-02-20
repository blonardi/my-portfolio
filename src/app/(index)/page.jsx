'use client'

import Container from './components/Container'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
export default function page() {
	return (
		<>
			<Container id='main'>
				<Header/>
				<Hero/>
				<Projects/>
				{/*<div>Technologies</div>*/}
				<Timeline/>
			</Container>
		</>
	)
}


