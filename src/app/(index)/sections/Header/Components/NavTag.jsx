
//export default function NavTag({children, onClick}){
//	return (
//		<>
//			<a className='text-xl transition hover:ease-in hover:scale-125 hover:cursor-pointer' onClick={onClick}>{children}</a>
//		</>
//	)
//}

import Link from "next/link";

export default function NavTag({ children, href, onClick }) {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<Link href={href} target="_blank" className='text-xl transition hover:ease-in hover:scale-125 hover:cursor-pointer' onClick={handleClick}>
			{children}
		</Link>
	);
}