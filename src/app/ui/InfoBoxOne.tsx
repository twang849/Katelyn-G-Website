'use client';

import { Merriweather_Sans } from "next/font/google";
import Section from "./Section";
import { useInView } from "react-intersection-observer";

const font = Merriweather_Sans({subsets: ['latin'], weight:['400']});

export default function InfoBoxOne () {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <Section bgColor="bg-white" height="h-[50rem]">
            <div className="flex flex-row items-center gap-[5rem]">
                <video controls className="h-auto w-80">
                    <source src="clip.mp4" type="video/mp4"></source>
                </video>
                <div className="flex flex-col">
                    <div ref={ref} className={`${font.className} leading-relaxed ${ inView ? 'opacity-100' : 'opacity-0' } transition duration-1000 whitespace-pre-line text-black text-2xl`}>
                        {`Emerging from Stratford, Ontario, Katie Girodat is a 19-year-old 
                        singer-songwriter whose heartfelt lyrics and soulful melodies are 
                        capturing attention.`}
                    </div>
                    <br/>
                    <div ref={ref2} className={`${font.className} leading-relaxed ${ inView2 ? 'opacity-100' : 'opacity-0' } transition duration-1000 whitespace-pre-line text-black text-2xl`}>    
                        {`Currently studying at Trent University, Katie has been immersed in 
                        music from a young age, crafting songs that delve into personal 
                        experiences and emotional depth.`}
                    </div>
                </div>
            </div>
        </Section>
    );
    
}