import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { useFilterContext } from '@/contexts/ShotsFilterContext'
import timeframes from '@/data/shotsFilterTimeframes'

export default function TimeFrameInput(){

    const [activeDropdown, setActiveDropdown] = useState(false)
    const {timeframe, setTimeframe}= useFilterContext()
    
    function handleFrame(frame){
        setTimeframe(frame)
        setActiveDropdown(false)
    }

    function isActiveFrame(frame){
        return frame.time === timeframe
    }

    return(
        <div className="relative">
            <div className="text-sm font-semibold relative">
                Timeframe
            </div>

            <button 
                className="text-sm flex items-center justify-between gap-4 py-3 capitalize font-semibold min-w-full border-[1.5px]  border-gray-300 rounded-lg px-4 mt-4"
                onClick={() => setActiveDropdown(prev => !prev)}
            >

                {timeframe || 'Now'}
                {activeDropdown ? <ChevronUp className="size-3.5" /> : <ChevronDown  className="size-3.5"/>}
            </button>

            {
                activeDropdown && 
                <div className="w-full flex flex-col gap-2 p-4 rounded-lg absolute -bottom-4 left-1/2 bg-white -translate-x-1/2 translate-y-full border-[1.5px] border-gray-300 shadow-xs">
                    {
                        timeframes.map(frame =>(
                            <button 
                                onClick={() => handleFrame(frame.time)}
                                key={frame.time}
                                className={`text-sm py-2.5 px-4 rounded flex items-center justify-between cursor-pointer hover:bg-gray-100 ${ isActiveFrame(frame) && 'bg-gray-100'}`}
                            >
                                {frame.displayTitle}
                                {isActiveFrame(frame) && <Check className="size-4" />}
                            </button>
                        ))
                    }
                </div>
            }

        </div>
    )
}

