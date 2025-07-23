"use client"; 

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import SearchFrom from './SearchFrom'
import { AlignLeft, Search, X } from 'lucide-react'



export default function Header(){
    const [activeSearchFrom, setActiveSearchFrom] = useState(false)
    const [activeNavbar, setActiveNavbar] = useState(false)
    const [isSamllScreen, setIsSamllScreen] = useState(true);

    useEffect(() =>{

        function checkSreenSize(){
            setIsSamllScreen(window.innerWidth <= 768)
        }

        checkSreenSize()

        window.addEventListener('resize', checkSreenSize)

        return () => window.removeEventListener('resize', checkSreenSize)

    })

    return(
        <header className="px-4 py-2 relative bg-white">
           <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-8">
                <div className="flex items-center gap-4">

                    <button className="cursor-pointer md:hidden"  onClick={() =>{
                            if(activeSearchFrom) setActiveSearchFrom(false)
                            setActiveNavbar(prev => !prev)
                        } }>
                        {activeNavbar ? <X /> : <AlignLeft/>}
                    </button>


                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
            
                { isSamllScreen ? (activeSearchFrom ? <SearchFrom /> : null) : <SearchFrom />}
                { isSamllScreen ? (activeNavbar ? <Navbar isSmallSreen={isSamllScreen} /> : null) : <Navbar />}

                <div className="flex items-center gap-4">
                    <button className="hover:opacity-70 cursor-pointer transition md:hidden" onClick={() => {
                        if(activeNavbar) setActiveNavbar(false)
                        setActiveSearchFrom(prev => !prev)
                    }}>
                        <Search />
                    </button>
                    <Link href="/signups/new" className="font-semibold hidden md:block">Sign Up</Link> 
                    <Link href="/session/new" className="bg-black text-white px-6 py-2.5 rounded-full hover:opacity-70 transition">Login</Link>
                </div>
           </div>
        </header>
    )
}


