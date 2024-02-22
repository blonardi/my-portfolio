'use client'
export default function Container({children, id, newClass}){
	return (
		<>
			<section id={id} className={`flex flex-col justify-center w-full mx-auto text-white lg:max-w-screen-lg opacity-90 ${newClass}`}>
				{children}
			</section>
		</>
	)
}