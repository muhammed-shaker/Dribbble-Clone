import { ChevronDown, ChevronUp, Search } from "lucide-react";
import {useRef, useState } from "react"

export default function SearchFrom(){
    const [query, setQuery] = useState('');
    const [dropdownExpanded, setDropdownExpanded] = useState(false)
    const [searchCategroy, setSearchCategory] = useState('shots');

    const inputElement = useRef()

    function changeSearchCategory(category){
        setSearchCategory(category)
        setDropdownExpanded(false)

        if(inputElement){
            inputElement.current.focus()
        }
    }

    
    return (
        <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-white translate-y-full md:static md:translate-none md:flex-1">
            <div className="md:static flex items-center gap-2 hover:outline-3 bg-from hover:bg-white outline-pink-100 rounded-full p-2 font-roboto">
                <input ref={inputElement} className="outline-none text-sm flex-1 px-4 placeholder-gray-700" type="text" placeholder="What are you looking for?" value={query} onChange={event => setQuery(event.target.value)}/>
                <div className="flex items-center">
                    <div className="flex flex-col relative">
                        <button onClick={() => setDropdownExpanded(prev => !prev)} className="cursor-pointer flex items-center gap-1 font-semibold capitalize hover:text-link-hover transition">
                        {searchCategroy}
                        {
                                dropdownExpanded ? <ChevronUp  className="size-3.5"/> : <ChevronDown className="size-3.5" />
                        }
                        </button>
                        {
                            dropdownExpanded && 
                            <div className="flex flex-col absolute top-11 bg-white shadaw-xs border border-nav-dropdown-border rounded-lg min-w-[150px] p-4">
                                <button onClick={() => changeSearchCategory('shots')} className="hover:outline outline-gray-200 hover:bg-gray-50 p-1.5 cursor-pointer rounded-lg">Shots</button>
                                <button onClick={() => changeSearchCategory('designers')} className="hover:outline outline-gray-200 hover:bg-gray-50 p-1.5 cursor-pointer rounded-lg">Designers</button>
                                <button onClick={() => changeSearchCategory('services')} className="hover:outline outline-gray-200 hover:bg-gray-50 p-1.5 cursor-pointer rounded-lg">Services</button>
                            </div>
                        }
                    </div>
                </div>
                <button className="bg-primary p-2.5 rounded-full text-white cursor-pointer">
                    <Search  className="size-5"/>
                </button>
            </div>
        </div>
    )
}