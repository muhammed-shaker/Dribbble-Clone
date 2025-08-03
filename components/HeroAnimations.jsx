"use client";

import { Play } from "lucide-react";
import animations from "../data/heroAnimations"
import Link from "next/link";
import { useEffect, useRef } from "react";
import VideoControlButton from "./VideoControlButton";

export default function HeroAnimations(){
    const videoElement = useRef(null)

    useEffect(() =>{
        videoElement.current.parentElement.classList.remove('hidden')
        videoElement.current.play()
    })

    function playNextVideo(){

        // Hide previous Animation
        videoElement.current.parentElement.classList.add('hidden')
        const index = parseInt(videoElement.current.getAttribute('data-animation'))

        // Play Next Animation
        const currentVideo = videoElement.current.parentElement.parentElement
            .querySelector(`[data-animation="${index < animations.length - 1 ? index + 1 : 0 }"]`)

        videoElement.current = currentVideo
        videoElement.current.parentElement.classList.remove('hidden')
        videoElement.current.play()
    }


    return (
        <aside  className="hidden md:block md:flex-1 max-w-[614px] rounded-2xl relative overflow-hidden shadow-sm">
            <VideoControlButton video={videoElement} />
            <div className="absolute inset-0">
                {animations.map((animation, index) =>(
                    <figure className="relative size-full hidden animate-video-fadein" key={animation.designer.name}>
                        <video ref={index === 0 ? videoElement : null} data-animation={index} src={animation.videoSrc} poster={animation.poster} className="absoleute inset-0 object-cover h-full" onEnded={playNextVideo}></video>
                        <Link href={animation.designer.profileUrl} className="animate-fadein shadow flex items-center gap-4 bg-white p-1 pr-3 text-sm rounded-full absolute bottom-3 right-3">
                            <img className="size-8 rounded-full" src={animation.designer.avatar} alt={animation.designer.name} />
                            {animation.designer.name}
                        </Link>
                    </figure>
                ))}
            </div>
        </aside>
    )
}