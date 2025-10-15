// Import global styles and fonts
import './globals.css'
import { Source_Sans_3 } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import type { Metadata } from 'next'
 
const source_sans_3 = Source_Sans_3({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="en" className="">
      <body>
        <h1 className={`text-center font-bold text-5xl mt-6 ${playfairDisplay.className}`}>404 - Page Not Found</h1>
        <p className={`text-center mt-6 ${source_sans_3.className}`}>This page does not exist.<br/>
        <a href="/" className="text-center mt-6 text hover:underline">Go back home</a></p>
      </body>
    </html>
  )
}