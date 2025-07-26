import Link from 'next/link'
import { explore, services, categories } from '../data/links'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Navbar({activeNavbar}){

    const [activeExplore, setActiveExplore] = useState(false)
    const [activeServices, setActiveServices] = useState(false)
    
    return (
        <nav className={`${activeNavbar ? 'flex animate-fadein' : 'hidden'} flex-col gap-4 absolute bottom-0 translate-y-full bg-white left-0 right-0 border-t border-gray-300 p-8 lg:flex lg:static lg:translate-none lg:border-none lg:flex-row  lg:items-center lg:gap-3 lg:p-0`}>
            
            {/* Explore  */}
            <div className="flex flex-col lg:items-center relative group">
                <button className="flex lg:hidden items-center gap-1 font-bold text-xl lg:text-sm hover:text-button-hover transition" onClick={() =>setActiveExplore(prev => !prev)}>
                        Explore
                        {activeExplore ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                </button>

                <div className="hidden lg:block lg:after:content-[''] lg:after:w-full lg:after:h-9 lg:after:block lg:after:absolute">
                    <Link href="/shots/explore" className="flex items-center gap-1 font-bold text-xl lg:text-sm hover:text-button-hover transition">
                        Explore
                        <ChevronDown className="size-4" />
                    </Link>
                </div>
                
                <div  className={`${activeExplore  ? 'h-auto' : 'h-0'} lg:h-auto flex-col overflow-hidden gap-4 lg:absolute lg:bg-white lg:hidden lg:shadow-sm lg:border lg:border-nav-dropdown-border lg:p-8 lg:rounded-xl lg:w-[230px]  lg:-bottom-4  lg:translate-y-full lg:group-hover:flex`}>
                    
                    <div className="flex flex-col gap-4">    
                        {
                            explore.map(link =>{
                                return <Link href={link.href} className="flex items-center gap-2 text-lg font-semibold hover:text-link-hover transition lg:text-sm" key={link.title}>
                                            {link.icon}
                                            {link.title}
                                        </Link>  
                            })
                        }   
                    </div>

                    <div className="flex flex-col gap-4 border-t border-gray-300 pt-4 mt-4 lg:mt-0">
                        {
                            categories.map(category =>(
                                <Link href={category.href} className="hover:text-link-hover transition lg:text-sm" key={category.title}>
                                    {category.title}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Hire a Designer  */}
             <div className="flex flex-col lg:items-center relative group">
                <button className="flex lg:hidden items-center gap-1 font-bold text-xl lg:text-sm hover:text-button-hover transition" onClick={() =>setActiveServices(prev => !prev)}>
                        Hire a Designer
                        {activeServices ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                </button>

                <div className="hidden lg:block lg:after:content-[''] lg:after:w-full lg:after:h-9 lg:after:block lg:after:absolute">
                    <Link href="/shots/explore" className="flex items-center gap-1 font-bold text-xl lg:text-sm hover:text-button-hover transition">
                        Hire a Designer
                        <ChevronDown className="size-4" />
                    </Link>
                </div>
                
                <div  className={`${activeServices  ? 'h-auto' : 'h-0'} lg:h-auto flex-col overflow-hidden gap-4 lg:absolute lg:bg-white lg:hidden lg:shadow-sm lg:border lg:border-nav-dropdown-border lg:p-8 lg:rounded-xl lg:w-[230px]  lg:-bottom-4  lg:translate-y-full lg:group-hover:flex`}>
                    {
                        services.map(link =>{
                            return <Link href={link.href} className="flex items-center gap-2 text-lg font-semibold hover:text-link-hover transition lg:text-sm" key={link.title}>
                                        {link.icon}
                                        {link.title}
                                    </Link>  
                        })
                    }      
                </div>
            </div>

            {/* Find Jobs */}
            <Link href="/jobs" className="flex items-center gap-2 font-bold text-xl hover:text-link-hover transition lg:text-sm">
                Find Jobs
            </Link>
            
            {/* Blog */}
            <Link href="/blog" className="flex items-center gap-2 font-bold text-xl hover:text-link-hover transition lg:text-sm">
                Blog
            </Link>

        </nav>
    )
}

