'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function Profile(){
	const router = useRouter()
	console.log(router)
	return (
		<div>
			<h1>List of profiles</h1>
			<div>
				<ul>
					<Link href='/profile/1'>Profile 1</Link>
					<li onClick={()=>{
						router.push("/profile/2")
					}}>Profile 2</li>
					<li onClick={()=>{
						router.push("/profile/3")
					}}>Profile 3</li>
				</ul>
			</div>
		</div>
	)
}