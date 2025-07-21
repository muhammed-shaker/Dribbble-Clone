import Link from 'next/link'
import Logo from './Logo'
import Navbar from './Navbar'
import SearchFrom from './SearchFrom'



export default function Header(){
    return(
        <header className="p-8">
           <div className="max-w-7xl mx-auto px-4 flex items-center gap-8">

                 <Link href="/">
                    <Logo />
                </Link>
                <SearchFrom />
                <Navbar />
                <div className="flex items-center gap-4">
                    <Link href="/signups/new" className="font-semibold">Sign Up</Link>
                    <Link href="/session/new" className="bg-black text-white px-6 py-2.5 rounded-full">Login</Link>
                </div>
           </div>
        </header>
    )
}


