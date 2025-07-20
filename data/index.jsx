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
                icon: <TrendingUp />
            },
            {
                title: "New and Notenorthy",
                href: "shots/recent",
                icon: <Sparkles />
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
                icon: <Search />
            },
            {
                title: "Purchase Services",
                href: "/services",
                icon: <Tag />
            },
            {
                title: "Talk to Talen Expert",
                href: "/talk-to-expert",
                icon: <Headset />
            },
            {
                title: "Post a Full-Time Job",
                href: "/jobs/new",
                icon: <FileText />
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