import { Children } from "react";

export default function SocialPill({ link, children }) {
	return (
		<>
			<a href={link} target='_blank' className="flex items-center justify-center px-2 py-2 transition duration-500 border rounded-full cursor-pointer border-white/10 gap-x-2 bg-white/5 hover:scale-105 hover:bg-white/10">
				{children}
			</a>
		</>
	)
}