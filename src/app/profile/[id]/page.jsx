'use client'

import { useParams } from "next/navigation"
export default function ProfileId(){
	const params = useParams()
	return(
		<h2>Profile page {params.id}</h2>
	)
}