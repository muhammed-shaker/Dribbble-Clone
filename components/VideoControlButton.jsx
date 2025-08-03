import { Pause, Play } from "lucide-react"
import { useState } from "react"

export default function VideoControlButton({videos, index}){
    const [playing, setPlaying] = useState(true)

    
    function toggle(){
        const video = videos.current[index.current]
        if(playing === true)  {
            video.pause()
            setPlaying(false)

        } else{
            video.play()
            setPlaying(true)
        }        
    }

    return (
        <button 
            className="absolute left-6 bottom-6 rounded-full p-2 shadow z-50 bg-white cursor-pointer"
            onClick={toggle}
        >
            {playing ? <Pause className="size-5" /> : <Play className="size-5" /> }
        </button>
    )
}