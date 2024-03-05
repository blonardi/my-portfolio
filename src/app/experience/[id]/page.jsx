//'use client'
import EXPERIENCES from '@/app/assets/experiences.js'
import Image from 'next/image'


export default function Experience({ params: { id } }) {
	const experience = EXPERIENCES.find((exp) => exp.id === Number(id))
	return (

		<div className="container flex flex-col items-start justify-between min-h-screen py-8 text-white">
			<div className=' imagen'>
				{/* screen web and link it */}
				<figure className='shadow-2xl shadow-slate-200'>
					<Image className='rounded-full' src={experience.image} height={600} width={800} alt={`Image of web ${experience}`} />
				</figure>
			</div>
			<div className='flex items-center justify-start h-auto my-10 gap-x-4'>
				<h2 className='text-4xl'>{experience.enterprise} -</h2>
				<p className='text-xl text-zinc-100'>{experience.date}</p>
			</div>
			<div className='flex-grow flex-shrink-0'>
				<h4 className='mb-2 text-2xl'>{experience.title}</h4>
				<h2 className='text-lg'>{experience.subtitle}</h2>
				<p className='text-md'>{experience.description}</p>
			</div>
		</div>
	)
}
