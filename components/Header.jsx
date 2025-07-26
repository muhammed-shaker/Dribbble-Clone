"use client"; 

import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import SearchForm from './SearchForm'
import { AlignLeft, Search, X } from 'lucide-react'


export default function Header(){
    const [activeSearchForm, setActiveSearchForm] = useState(false)
    const [activeNavbar, setActiveNavbar] = useState(false)

    console.log("form: " , activeSearchForm);
    
    function toggleNavbar(){
        if(activeSearchForm) setActiveSearchForm(false)
        setActiveNavbar(prev => !prev)
    }

    function toggleSearchForm(){
        if(activeNavbar) setActiveNavbar(false)
        setActiveSearchForm(prev => !prev)
    }
    
    return(
        <header className="px-4 py-2 relative bg-white">
           <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-8">

                <div className="flex items-center gap-4">
                    
                    <button className="cursor-pointer lg:hidden"  onClick={toggleNavbar}>
                        {activeNavbar ? <X /> : <AlignLeft/>}
                    </button>

                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
            
                <SearchForm activeSearchForm={activeSearchForm} />
                <Navbar activeNavbar={activeNavbar} />

                <div className="flex items-center gap-4">
                    <button className="hover:opacity-70 cursor-pointer transition md:hidden" onClick={toggleSearchForm}>
                        <Search />
                    </button>
                    <Link href="/signups/new" className="font-semibold hidden md:block">Sign Up</Link> 
                    <Link href="/session/new" className="bg-black text-white px-6 py-2.5 rounded-full hover:opacity-70 transition">Login</Link>
                </div>
           </div>
        </header>
    )
}


