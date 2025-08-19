import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Slider({children}){


    // translateX [by pixel]

    // on translate
    // if translateX > 0 backward width, else don't
    // if translateX < track width forward, else don't

    // how to infer the overflow from translateX
    // track - (translateX + viewport width) = overflow 
   
    // on forward
    // if overflow >= viewport , tranlste by  viewport width
    // else translate by the overflow width

    // on backward 
    // if translateX >= viewport , tranlste by negative viewport width
    // set translateX = 0 

    const [translateX, setTranslateX] = useState(0)
    const [trackWidth, setTrackWidth] = useState(null)
    const [viewportWidth, setViewportWidth] = useState(null)

    const viewport = useRef(null)
    const track = useRef(null)

    useEffect(() =>{

        function setWidth(){
            setViewportWidth(viewport.current.getBoundingClientRect().width)
            setTrackWidth(track.current.getBoundingClientRect().width)
            setTranslateX(0)
        }

        window.addEventListener('resize', setWidth)

        setWidth()

        return () => window.removeEventListener('resize', setWidth)

        
    }, [])


    function forward(){
       if(translateX >= track) return
        const overflow = trackWidth - (translateX + viewportWidth) + 32
        setTranslateX(previousValue =>{
            return previousValue + (overflow >= viewportWidth ? viewportWidth : overflow)
        })

    }

    function backward(){
        if(translateX <= 0) return
        setTranslateX(previousValue =>{
            return translateX >= viewportWidth ? previousValue - viewportWidth : 0
        })
    }
    
    return (
        <div className="flex-1 flex items-center gap-4">

            {
                translateX > 0 &&
                <button className="cursor-pointer" onClick={backward}>
                    <ChevronLeft className="size-4" />
                </button>
            }

            <div ref={viewport} className="flex-1 overflow-x-hidden py-7 relative">
                <div ref={track} style={{transform: `translateX(-${translateX}px)`}} className="flex items-center gap-4 flex-nowrap min-w-fit absolute left-0 top-0 bottom-0 transition-transform duration-800">
                    {children}
                </div>
            </div>

            {
                trackWidth - (translateX + viewportWidth) + 32 !== 0 &&
                <button className="cursor-pointer" onClick={forward}>
                    <ChevronRight className="size-4" />
                </button>
            }
        </div>
    )
}