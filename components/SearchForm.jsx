"use client";

import { Image, Users, FileText, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react"

export default function SearchForm() {
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('shots')

    
    function getFormParams(){

        let placeholder, keywords

        switch(category){
            case "shots": 
                placeholder = 'What type of type of design you are interested in?'
                keywords = ['dashboard', 'landing page', 'e-commerce', 'logo']
                break

            case "designers":
                placeholder = 'What type of designer do you need?'
                keywords = ['app design', 'landing page', 'web design']
                break

            case "services": 
                placeholder =  'What do you need designed?'
                keywords = ['branding', 'logo design', 'mobile app', 'illustration']
                break
            default:
                placeholder = 'What are you looking for?'
                keywords = []

        }

        return [placeholder, keywords]
    }

    function getSearchKeywordLink(keyword){
        if(category === 'designers'){
            return '/designers/' + keyword

        } else if(category === 'services'){
            return '/services/search/' + keyword
        }

        return '/search/' + keyword
    }

    const [placeholder, keywords] = getFormParams()

    

    return (
        <div>
            <div className="flex items-center gap-4 my-6 justify-center md:justify-start">
                <button 
                    className={`flex items-center gap-2 rounded-full px-4 py-2  text-sm font-semibold cursor-pointer ${category === 'shots' ? 'bg-black text-white' : ''} `}
                    onClick={() => setCategory('shots')}
                >
                    <Image className="size-5" />
                    Shots 
                </button>
                 <button 
                    className={`flex items-center gap-2 rounded-full px-4 py-2  text-sm font-semibold cursor-pointer ${category === 'designers' ? 'bg-black text-white' : ''} `}
                    onClick={() => setCategory('designers')}
                >
                    <Users className="size-5" />
                    Designers
                </button>
                 <button 
                    className={`flex items-center gap-2 rounded-full px-4 py-2  text-sm font-semibold cursor-pointer ${category === 'services' ? 'bg-black text-white' : ''} `}
                    onClick={() => setCategory('services')}
                >
                   <FileText className="size-5" />
                    Services
                </button>
            </div>

            <div className="flex items-center gap-2 hover:outline-3 bg-from hover:bg-white outline-pink-100 rounded-full p-2 font-roboto">
                <input className="outline-none text-sm flex-1 px-4 placeholder-gray-700" type="text" placeholder={placeholder} value={query} onChange={event => setQuery(event.target.value)}/>
                
                <button className="bg-primary p-2.5 rounded-full text-white cursor-pointer">
                    <Search  className="size-5"/>
                </button>
            </div>

            {
                keywords && 
                <div className="flex items-center gap-4 my-6 flex-wrap">
                    <span className="font-semibold text-sm">Popular:</span>
                    {
                        keywords.map(keyword =>{
                        return <Link className="border border-gray-300 rounded-full px-3 py-1.5 text-xs hover:bg-from transition" key={keyword} href={getSearchKeywordLink(keyword)}>{keyword}</Link>
                        })
                    }
                </div>
            }

        </div>
    )
}