import { Pause, Play } from "lucide-react"
import { useState } from "react"

export default function VideoControlButton({video, state = true}){
    const [playing, setPlaying] = useState(state)

    function toggle(){

        if(playing === true)  {
            video.current.pause()
            console.log(video);
            
            setPlaying(false)
        } else{
            video.current.play()
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