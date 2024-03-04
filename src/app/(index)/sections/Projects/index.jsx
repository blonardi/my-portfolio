'use client'
import Image from "next/image"
import Code from '@/app/assets/icons/code.svg'
import SectionContainer from "../SectionContainer"
import ProjectList from "./Projects"
export default function Projects() {
	return (
		<>
			<SectionContainer id='projects' newClass="pb-32">
				<div>
					<h2 className="flex items-center mb-6 text-2xl gap-x-2 font-semiboldbold">
						<Image src={Code} alt="Code project Logo" height={28} width={28} />
						<span className="text-3xl">Projects</span>
					</h2>
				</div>
				<ProjectList />
			</SectionContainer>
		</>
	)
}