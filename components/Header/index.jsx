"use client"; 

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from '../Logo'
import Navbar from './Navbar'
import SearchForm from './Form'
import { AlignLeft, Search, X } from 'lucide-react'


export default function Header(){
    const [activeSearchForm, setActiveSearchForm] = useState(false)
    const [activeNavbar, setActiveNavbar] = useState(false)
    const [showForm, setShowForm] = useState(false)

    useEffect(() =>{

        function handleScroll(){
            setShowForm(window.scrollY > 650)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })


    
    function toggleNavbar(){
        if(activeSearchForm) setActiveSearchForm(false)
        setActiveNavbar(prev => !prev)
    }

    function toggleSearchForm(){
        if(activeNavbar) setActiveNavbar(false)
        setActiveSearchForm(prev => !prev)
    }
    
    return(
        <header className={`p-4 relative bg-white ${showForm ? 'sticky top-0 left-0 right-0 animate-fadein py-2' : ''}`}>
           <div className="max-w-7xl mx-auto px-4 flex items-center gap-8">

                <div className="flex items-center gap-4">
                    
                    <button className="cursor-pointer lg:hidden"  onClick={toggleNavbar}>
                        {activeNavbar ? <X /> : <AlignLeft/>}
                    </button>

                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
            
                {showForm ? <SearchForm activeSearchForm={activeSearchForm} /> : null}
                <Navbar activeNavbar={activeNavbar} />

                <div className="flex items-center gap-4 ml-auto" >
                    { 
                        showForm ? 
                        (
                            <button className="hover:opacity-70 cursor-pointer transition md:hidden" onClick={toggleSearchForm}>
                                <Search />
                            </button>
                        )
                        :
                        (
                            null
                        )
                    }
                    <Link href="/signups/new" className="font-semibold hidden md:block">Sign Up</Link> 
                    <Link href="/session/new" className="bg-black text-white px-6 py-2.5 rounded-full hover:opacity-70 transition">Login</Link>
                </div>
           </div>
        </header>
    )
}


