'use client'
export default function SectionContainer({children, id, newClass}){
	return (
		<>
			<div>
				<section id={id} className={`w-full px-8 lg:w-full lg:max-w-screen-md mx-auto ${newClass}`}>
					{children}
				</section>
			</div>
		</>
	)
}