import Link from 'next/link'
import { Links } from '../data'
import LinksGroup from './LinksGroup'

export default function Navbar({isSmallSreen}){
    return (
        <nav className="flex flex-col gap-4 absolute bottom-0 translate-y-full bg-white left-0 right-0 border-t border-gray-300 p-8 md:static md:translate-none md:border-none md:flex-row  md:items-center md:gap-3 md:p-0">
            {Links.map((link, index) =>{

                    return link.isGroup ?
                    (
                        <LinksGroup {...link} isSmallScreen={isSmallSreen} key={`${link.title.replaceAll(' ', '')}-${index}`} />

                    ) : (

                        <Link href={link.href} className="flex items-center gap-2 font-bold text-xl hover:text-link-hover transition md:text-sm" key={`${link.title.replaceAll(' ', '')}-${index}`}>
                            {link.title}
                        </Link>
                    )

            })}
        </nav>
    )
}

