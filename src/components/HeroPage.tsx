import Link from "next/link";
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] });
export default function HeroPage() {

  return (
    <div className="grid md:grid-cols-2 justify-items-center space-y-14">
        <div className={`${inter.className} justify-center md:justify-start text-left place-content-center space-y-5`}>
            <p className="text-4xl">Hello! I am</p>
            <p className="text-7xl text-green-600 -ml-2">Joshua Lonsako</p>
            <p className="text-lg">A <span className="text-blue-600 font-bold">Full-Stack developer</span> based in Phoenix, Arizona with a passion for making people's lives easier through tech.</p>
            <div style={{marginTop: '2rem'}}>
                <Link href="/about" className="bg-green-600 hover:bg-green-400 hover:text-black transition-colors px-6 py-4 rounded-md text-white text-xl hover:no-underline">
                    Learn more
                </Link>
            </div>
        </div>

        <div className="place-content-center">
            <Image src='/Frame2.png' alt='Image of me, Joshua Lonsako' width={400} height={400} />
        </div>
    </div>
  );
}
