'use client'

import SectionContainer from "../SectionContainer"
import ItemTimeline from "./ItemTimeline"
import Image from "next/image"
import Laptop from '@/app/assets/icons/laptop.svg'
export default function Timeline() {
	const EXPERIENCE = [
		{
			enterprise: 'Kumpel',
			date: 'March 22 - Present',
			title: 'Fullstack Developer',
			description: 'Development and design of websites with React and Express stack.',
			link: true,
		},
		{
			enterprise: 'Tuba-Tech',
			date: 'March 21 - January 23',
			title: 'Frontend Developer',
			description: 'Development and design of websites with Wordpress and PHP stack.',
			link: false
		},
	]
	return (
		<>
			<SectionContainer id='about-me' newClass='ml-2'>
				<h2 className="flex items-center mb-6 text-2xl gap-x-2 font-semiboldbold">
					<Image src={Laptop} alt="Experience Logo" height={28} width={28} />
					Experience
				</h2>
				<ol className="relative ml-2 border-gray-200 border-s dark:border-gray-700">
					{EXPERIENCE.map((job, index) => (
						<li key={index} className="mb-10 ms-4">
							<ItemTimeline enterprise={job.enterprise} date={job.date} title={job.title} description={job.description} link={job.link} />
						</li>
					))}
				</ol>
			</SectionContainer>
		</>
	)
}