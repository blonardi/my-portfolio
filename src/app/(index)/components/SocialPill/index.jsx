import { Children } from "react";

export default function SocialPill({link, children}){
	return(
		<>
			<a href={link} className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-2 bg-white/5 hover:scale-105 hover:bg-white/10 transition">
				{children}
			</a>	
		</>
	)
}