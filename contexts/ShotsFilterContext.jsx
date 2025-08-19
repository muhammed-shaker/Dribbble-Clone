'use client'

import { useRouter } from 'next/navigation';
import { createContext, useContext, useState } from 'react'
import { createFiltersURL } from '@/utils/shotsFilterURL';

const FilterContext = createContext()

export function FilterContextProvider({ children }) {
  
    const [optionDiscovery, setOptionDiscovery] = useState('popular')
    const [category, setCategory] = useState('discover')
    const [tags, setTags] = useState('')
    const [color, setColor] = useState('')
    const [timeframe, setTimeframe] = useState('')

    const router = useRouter()

  function applyFilters(){

    const url = createFiltersURL(optionDiscovery, category, tags, color, timeframe)
    router.push(url)

  }

  
  return (
    <FilterContext.Provider value={{ optionDiscovery, setOptionDiscovery, category, setCategory, tags, setTags, color, setColor, timeframe, setTimeframe, applyFilters}}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext)
 