'use client';

import { Merriweather_Sans } from "next/font/google";
import Section from "./Section";
import { useInView } from "react-intersection-observer";

const font = Merriweather_Sans({subsets: ['latin'], weight:['400']});

export default function InfoBoxOne () {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <Section bgColor="bg-black" height="h-[50rem]">
            <div ref={ref} className="flex flex-row items-center gap-[5rem]">
                <video controls className="h-auto w-80">
                    <source src="clip.mp4" type="video/mp4"></source>
                </video>
                <div className="flex flex-col">
                    <div className={`${font.className} leading-relaxed ${ inView ? 'opacity-1000' : 'opacity-0' } transition duration-1000 whitespace-pre-line text-white text-2xl`}>
                        {`Emerging from Stratford, Ontario, Katie Girodat is a 19-year-old 
                        singer-songwriter whose heartfelt lyrics and soulful melodies are 
                        capturing attention.`}
                    </div>
                    <br/>
                    <div className={`${font.className} delay-500 leading-relaxed ${ inView ? 'opacity-1000' : 'opacity-0' } transition duration-1000 whitespace-pre-line text-white text-2xl`}>    
                        {`Currently studying at Trent University, Katie has been immersed in 
                        music from a young age, crafting songs that delve into personal 
                        experiences and emotional depth.`}
                    </div>
                </div>
            </div>
        </Section>
    );
    
}