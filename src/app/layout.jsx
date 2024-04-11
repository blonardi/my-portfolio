import { Inter, Roboto, Onest } from 'next/font/google'
import './globals.css'

const onest = Onest({ subsets: ['latin'] })
const roboto = Roboto({ weight: "400", subsets: ['latin'] })

export const metadata = {
	title: 'Portfolio de Bautista Lonardi - Desarrollador Fullstack Web',
	description: 'Portfolio de Bautista Lonardi creado con Nextjs',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
				<link rel="apple-touch-icon"
					href="/apple-icon?<generated>"
					type="image/<generated>"
					sizes="<generated>" />
			</head>
			<body className={onest.className}>
				<div className='fixed inset-0 z-[-2] h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>{children}
				</div>
			</body>
		</html>
	)
}
