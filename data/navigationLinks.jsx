import { FileText, Headset, Search, Sparkles, Tag, TrendingUp } from "lucide-react";

export const categories = [
    {
        title: "Product Design",
        href: "/shots/popular/product-design",
    },
    {
        title: "Web Design",
        href: "/shots/popular/web-design",
    },
    {
        title: "Animation",
        href: "/shots/popular/animation",
    },
    {
        title: "Branding",
        href: "/shots/popular/branding",
    },
    {
        title: "Illustration",
        href: "/shots/popular/illustration",
    },
    {
        title: "Mobile",
        href: "/shots/popular/mobile",
    },
    {
        title: "Typography",
        href: "/shots/popular/typography",
    },
    {
        title: "Print",
        href: "/shots/popular/print"
    }
]

export const explore = [
    {
        title: "Popular",
        href: "/shots/explore",
        icon: <TrendingUp className="size-5" />
    },
    {
        title: "New and Notenorthy",
        href: "/shots/recent",
        icon: <Sparkles className="size-5" />
    }
]

export const services = [    
    {
        title: "Browser Freelancers",
        href: "/designers",
        icon: <Search className="size-5" />
    },
    {
        title: "Purchase Services",
        href: "/services",
        icon: <Tag className="size-5" />
    },
    {
        title: "Talk to Talen Expert",
        href: "/talk-to-expert",
        icon: <Headset className="size-5" />
    },
    {
        title: "Post a Full-Time Job",
        href: "/jobs/new",
        icon: <FileText className="size-5" />
    }
]