import { FileText, Headset, Search, Sparkles, Tag, TrendingUp } from "lucide-react";

export const Links = [
    {
        title: "Explore",
        href: "shots/explore",
        isGroup: true,
        featured: [
            {
                title: "Popular",
                href: "shots/explore",
                icon: <TrendingUp className="size-5" />
            },
            {
                title: "New and Notenorthy",
                href: "shots/recent",
                icon: <Sparkles className="size-5" />
            },

        ],
        subLinks: [
            {
                title: "Product Design",
                href: "shots/popular/product-design",
            },
            {
                title: "Web Design",
                href: "shots/popular/web-design",
            },
            {
                title: "Animation",
                href: "shots/popular/animation",
            },
            {
                title: "Branding",
                href: "shots/popular/branding",
            },
            {
                title: "Illustration",
                href: "shots/popular/illustration",
            },
            {
                title: "Mobile",
                href: "shots/popular/mobile",
            },
            {
                title: "Typography",
                href: "shots/popular/typography",
            },
            {
                title: "Print",
                href: "shots/popular/print"
            },
        ]   
    },
    {
        title: "Hire a Designer",
        href: "/designers",
        isGroup: true,
        featured: [
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
    },
    {
        title: "Find Job",
        href: "/jobs",
        isGroup: false
    },
    {
        title: "Blog",
        href: "/stories",
        isGroup: false
    }

]