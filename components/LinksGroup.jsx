import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function LinksGroup({title, featured, href, subLinks, isSmallScreen}){

    const [active, setActive] = useState(false)

    return(  
        <div className="flex flex-col items-center relative group">

            <div className="md:after:content-[''] md:after:w-full md:after:h-9 md:after:block md:after:absolute">
                {
                    isSmallScreen ?
                    (
                        <button className="flex items-center gap-1 font-bold text-xl md:text-sm hover:text-button-hover transition" onClick={() =>setActive(prev => !prev)}>
                            {title}
                            {active ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                        </button>
                    )
                    : 
                    (
                        <Link href={href} className="flex items-center gap-1 font-bold text-xl md:text-sm hover:text-button-hover transition">
                            {title}
                            <ChevronDown className="size-4" />
                        </Link>
                    )
                }
            </div>
        
            <div  className={`flex-col overflow-hidden gap-4 md:absolute md:bg-white md:hidden md:border md:border-nav-dropdown-border md:p-8 md:rounded-xl md:w-[230px]  md:-bottom-4 md:left-0 md:-translate-x-full md:translate-y-full md:group-hover:flex ${isSmallScreen ? (active  ? 'h-auto' : 'h-0') : ''}`}>
                {
                    featured && 
                    <div className="flex flex-col gap-4 pt-4 md:p-0">
                        
                        {featured.map((featuredLink, index) =>(
                            <Link href={featuredLink.href} className="flex items-center gap-2 text-lg font-semibold hover:text-link-hover transition md:text-sm" key={`${featuredLink.title.replaceAll(' ', '')}-${index}`}>
                                {featuredLink.icon}
                                {featuredLink.title}
                            </Link>
                        ))}
                    </div>
                }

                {
                    subLinks && 
                    <div className="flex flex-col gap-4 border-t border-gray-300 pt-4 md:p-0">
                        {subLinks.map((subLink, index) =>(
                            <Link href={subLink.href} className="hover:text-link-hover transition md:text-sm" key={`${subLink.title.replaceAll(' ', '')}-${index}`}>
                                {subLink.title}
                            </Link>
                        ))}
                    </div>
                }
            </div>

        </div>
    )
}