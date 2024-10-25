import localFont from "next/font/local";
import { Inter, Roboto, Dancing_Script, Pacifico } from 'next/font/google'

const geistVF = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
})

const inter = Inter({
  subsets: ["latin"],
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: '400'
})

const dancingScript = Dancing_Script({
  subsets: ["latin"]
})

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: '400'
})

export default function Home() {
  return (
    <div className={pacifico.className}>
      Home Page
    </div>
  );
}
