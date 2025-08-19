'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams} from 'next/navigation'
import { useFilterContext } from '@/contexts/ShotsFilterContext'

import categories from '@/data/categories'

import { Check, ChevronDown, ChevronUp, ListFilter} from 'lucide-react'
import Slider from '@/components/Slider'
import TagsInput from './TagsInput'
import ColorPicker from './ColorPicker'
import TimeframeSelect from './TimeframeSelect'

export default function ShotsFilter(){

    const [showDiscoveryOptions, setShowDiscoveryOptions] = useState(false)
    const [activeFilters, setActiveFilters] = useState(false)
    const [allowFilters, setAllowFilters] = useState(false)

    const {

        optionDiscovery,
        setOptionDiscovery,
        category,
        setCategory,
        color,
        setColor,
        tags,
        setTags,
        timeframe,
        setTimeframe,
        applyFilters

    } = useFilterContext()
    
    useEffect(() =>{

        if(allowFilters) applyFilters()

    }, [color, tags, timeframe])

    const params = useParams()
    const searchParams = useSearchParams()

    useEffect(() =>{
        
        if(params.slug){

            const discovery = params.slug[0] || 'popular'
            const category = params.slug[1] || 'discover'
            
            setOptionDiscovery(discovery)
            setCategory(category)

        }

        if(searchParams.has('tags')){
            setTags(searchParams.get('tags'))
        }

        if(searchParams.has('color')){
            setColor(searchParams.get('color'))
        }

        if(searchParams.has('timeframe')){
            setTimeframe(searchParams.get('timeframe'))
        }

        setAllowFilters(true)

  
    }, [])
   
    function isActiveOption(value){
        return value === optionDiscovery
    }

    function isActiveCategory(value){
        return value === category
    }

    return(
        <div className="flex flex-col gap-6 my-8">
            <div className="flex items-center font-roboto gap-8">
                <div className="relative">
                    <button 
                        className="border border-gray-300 py-2 px-4 rounded-lg text-sm flex items-center gap-4 capitalize font-semibold"
                        onClick={() => setShowDiscoveryOptions(prev => !prev)}
                    >

                        {optionDiscovery}

                        {showDiscoveryOptions ? <ChevronUp className="size-3.5" /> : <ChevronDown  className="size-3.5"/>}
                    </button>
                    {
                        showDiscoveryOptions && 
                        <div className="w-[224px] flex flex-col gap-2 p-4 rounded-lg absolute -bottom-4 left-1/2 bg-white -translate-x-1/2 translate-y-full border border-nav-dropdown-border shadow-xs">
                            <Link href="/shots/popular" className={`text-sm py-2.5 px-4 rounded flex items-center justify-between ${isActiveOption('popular') && 'bg-from'}`}>
                                Popular
                                {isActiveOption('popular') && <Check className="size-4" />}
                            </Link>
                            <Link href="/shots/recent" className={`text-sm py-2.5 px-4 rounded flex items-center justify-between ${isActiveOption('recent') && 'bg-from'}`}>
                                New & Noteworthy
                                {isActiveOption('recent') && <Check className="size-4" />}
                            </Link>
                        </div>
                    }
                </div>

                
                <Slider>
                    <Link 
                        href={`/shots/${optionDiscovery}`}
                        className={`${isActiveCategory('discover') && 'bg-from'} font-semibold py-2 px-4 rounded-full text-sm`}
                    >
                        Discover
                    </Link>
                    {   
                        categories.map(category =>(
                            <Link 
                                className={`${isActiveCategory(category.slug) && 'bg-from'} font-semibold py-2 px-4 rounded-full text-sm whitespace-nowrap`}
                                href={`/shots/${optionDiscovery}/${category.slug}`} 
                                key={category.title} 
                            >
                                {category.title}
                            </Link>
                        ))
                    }
                </Slider>

                <button 
                    onClick={() => setActiveFilters(prev => !prev)}
                    className="flex items-center gap-4 border border-gray-300 rounded-full px-6  py-2 font-roboto cursor-pointer text-sm font-semibold"
                >
                    <ListFilter className="size-4" />
                    Filter
                </button>

            </div>

           {
                activeFilters &&
                    <div className="grid grid-cols-3 gap-8">
                        <TagsInput />
                        <ColorPicker />
                        <TimeframeSelect />
                    </div>
           }
        </div>
    )
    
}