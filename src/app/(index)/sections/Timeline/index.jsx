'use client'

import EXPERIENCES from '@/app/assets/experiences.js'
import SectionContainer from "../SectionContainer"
import ItemTimeline from "./ItemTimeline"
import Image from "next/image"
import Laptop from '@/app/assets/icons/laptop.svg'
export default function Timeline() {

	return (
		<>
			<SectionContainer id='about-me'>
				<h2 className="flex items-center mb-6 text-2xl font-semibold gap-x-2">
					<Image src={Laptop} alt="Experience Logo" height={28} width={28} />
					Experience
				</h2>
				<ol className="relative ml-2 border-gray-200 border-s dark:border-gray-700">
					{EXPERIENCES.map(job => (
						<li key={job.id} className="mb-10 ms-4">
							<ItemTimeline id={job.id} enterprise={job.enterprise} date={job.date} title={job.title} description={job.subtitle} link={job.link} />
						</li>
					))}
				</ol>
			</SectionContainer >
		</>
	)
}