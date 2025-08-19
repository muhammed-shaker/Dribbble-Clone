'use client'
import animations from '@/data/heroAnimations'
import Link from 'next/link';
import { useEffect, useRef } from 'react'
import VideoControlButton from './VideoControlerButton'

export default function HeroAnimations(){
    const videoElements = useRef([])
    const currentIndex = useRef(0)

    useEffect(() =>{

        videoElements.current[0].parentElement.classList.remove('hidden')
        videoElements.current[0].play()

    }, [])

    function playNextVideo(){

        
        
        const currentVideo = videoElements.current[currentIndex.current];
        const nextVideo = videoElements.current[(currentIndex.current + 1 ) % animations.length];
        
        if(currentVideo && nextVideo){

            currentVideo.parentElement.classList.add('hidden')
            nextVideo.parentElement.classList.remove('hidden')
            nextVideo.play()

        }

        currentIndex.current++

    }


    return (
        <aside  className="group hidden md:block md:flex-1 max-w-[614px] rounded-2xl relative overflow-hidden shadow-sm">
            <div className="group-hover:block hidden">
                <VideoControlButton videos={videoElements} index={currentIndex} />
            </div>
            <div className="absolute inset-0">
                {animations.map((animation, index) =>(
                    <figure className="relative size-full hidden animate-video-fadein" key={animation.designer.name}>
                        <video ref={element => videoElements.current[index] = element} src={animation.videoSrc} poster={animation.poster} className="absoleute inset-0 object-cover h-full" onEnded={playNextVideo}></video>
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