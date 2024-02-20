import { Inter, Roboto, Onest } from 'next/font/google'
import './globals.css'

const onest = Onest({ subsets: ['latin'] })
const roboto = Roboto({weight: "400", subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio de Bautista Lonardi - Desarrollador Fullstack Web',
  description: 'Portfolio de Bautista Lonardi creado con Nextjs',
}

export default function RootLayout({ children }) {
  return (
	    <html lang="en">
				<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
	      	<body className={onest.className}>{children}</body>
				</div>
	    </html>
  )
}
