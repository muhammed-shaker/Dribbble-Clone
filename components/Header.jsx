import { nanoid } from 'nanoid'
import Link from 'next/link'
import Logo from './Logo'
import NavLink from './NavLink'
import { Links } from '../data'
import { ChevronDown } from 'lucide-react'


export default function Header(){
    return(
        <header className="p-8">
           <div className="max-w-7xl mx-auto px-4 flex items-center gap-8">

                 <Link href="/">
                    <Logo />
                </Link>

                <nav className="flex items-center gap-6">
                    {Links.map(link =>{

                        return link.isGroup ?
                        (
                            <div className="flex flex-col" key={nanoid()}>

                                <Link href={link.href} className="flex items-center gap-1 font-semibold">
                                    {link.title}
                                    {link.isGroup && <ChevronDown className="size-4" />}
                                </Link>

                                {
                                    link.featured && 
                                    <div className="flex flex-col gap-6 border-b border-gray-50 hidden">
                                        {link.featured.map(featuredLink => <NavLink {...featuredLink} key={nanoid()} />)}
                                    </div>
                                }

                                {
                                    link.subLinks && 
                                    <div className="flex flex-col gap-6 hidden">
                                        {link.subLinks.map(subLink => <NavLink {...subLink} key={nanoid()} />)}
                                    </div>
                                }

                            </div>

                        ) : (

                            <NavLink {...link} key={nanoid()} />
                        )

                    })}
                </nav>
           </div>
        </header>
    )
}


