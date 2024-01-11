export default function NavTag({children}){
	return (
		<>
			<a className='hover:ease-in hover:scale-125 transition hover:cursor-pointer text-xl'>{children}</a>
		</>
	)
}