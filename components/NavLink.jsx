import Link from 'next/link'

export default function NavLink({href, title, icon}){
    return  (
        <Link href={href} className="flex items-center gap-2 font-semibold text-sm">
            {icon && icon}
            {title}
        </Link>
    )
}