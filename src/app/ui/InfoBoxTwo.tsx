'use client';

import { useInView } from "react-intersection-observer";
import Section from "./Section";
import { Merriweather_Sans } from "next/font/google";

const font = Merriweather_Sans({subsets: ['latin'], weight:['400']});

export default function InfoBoxTwo () {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <Section bgColor="bg-white" height="h-[40rem]">
        <div className="flex flex-col gap-[5rem]">
          <div ref={ref} className={`${font.className} leading-relaxed whitespace-pre-line text-black text-2xl ${ inView ? 'opacity-100' : 'opacity-0'} transition duration-1000`}>
            {`Katie's musical style is influenced by artists such as Tate McRae,
            reflecting a modern pop sensibility infused with introspective 
            storytelling. Her performances, including a notable cover of 
            The Cranberries' "Zombie," highlight her vocal prowess and emotional
            expressiveness.`}
          </div>
          <div ref={ref2} className={`${font.className} leading-relaxed whitespace-pre-line text-black text-2xl ${ inView2 ? 'opacity-100' : 'opacity-0'} transition duration-1000`}>
            {`As she continues to develop her artistry, Katie Girodat stands out 
            as a promising talent in the Canadian music scene, offering a fresh 
            voice that speaks to the complexities of youth and personal growth.`}
          </div>
        </div>
      </Section>
    );
}