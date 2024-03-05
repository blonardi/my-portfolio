import SectionContainer from '@/app/(index)/sections/SectionContainer'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'


export default function layout({ children }) {
	return (
		<SectionContainer newClass={'min-h-screen bg-light-gray py-4'}>
			<Link href='/'>
				<div className='flex items-center justify-start px-3 py-2 transition-colors border rounded-full duration-400 max-w-36 hover:bg-indigo-800 hover hover:font-bold'>
					<ArrowUturnLeftIcon className='w-5 h-5 mx-auto text-center text-white stroke-1 hover:stroke-2' />
					<span className='mx-auto text-lg text-white'>
						regresar
					</span>
				</div>
			</Link>
			{children}
		</SectionContainer >
	)
}
