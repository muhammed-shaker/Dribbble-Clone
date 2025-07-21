import Link from 'next/link'
import { Links } from '../data'
import { ChevronDown } from 'lucide-react'
import { nanoid } from 'nanoid'

export default function Navbar(){
    return (
        <nav className="flex items-center gap-8">
            {Links.map(link =>{

                return link.isGroup ?
                (
                    <div className="flex flex-col relative group" key={nanoid()}>

                        <div className="after:content-[''] after:w-full after:h-9 after:block after:absolute">
                            <Link href={link.href} className="flex items-center gap-1 font-semibold text-sm hover:text-link-hover transition">
                                {link.title}
                                {link.isGroup && <ChevronDown className="size-4" />}
                            </Link>
                        </div>
                        
                        <div className="md:min-w-[230px] bg-white md:rounded-lg md:border md:border-nav-dropdown-border shadow-xs p-6 flex-col items-center md:hidden md:absolute md:top-9 md:left-1/2 md:-translate-x-1/2  md:group-hover:flex">
                            {
                                link.featured && 
                                <div className="flex flex-col gap-6">
                                    {link.featured.map(featuredLink =>(
                                        <Link href={featuredLink.href} className="flex items-center gap-2 text-sm font-semibold hover:text-link-hover transition" key={nanoid()}>
                                            {featuredLink.icon}
                                            {featuredLink.title}
                                        </Link>
                                    ))}
                                </div>
                            }

                            {
                                link.subLinks && 
                                <div className="flex flex-col gap-4 py-4 mt-6 w-full border-t-1 border-gray-300">
                                    {link.subLinks.map(subLink =>(
                                        <Link href={subLink.href} className="text-sm hover:text-link-hover transition" key={nanoid()}>
                                            {subLink.title}
                                        </Link>
                                    ))}
                                </div>
                            }
                        </div>

                    </div>

                ) : (

                    <Link href={link.href} className="flex items-center gap-2 font-semibold text-sm hover:text-link-hover transition" key={nanoid()}>
                        {link.title}
                    </Link>
                )

            })}
        </nav>
    )
}