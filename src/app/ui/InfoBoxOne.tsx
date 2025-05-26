import { Playfair_Display } from "next/font/google";
import Section from "./Section";

const playfair_display = Playfair_Display({subsets: ['latin']});

export default function InfoBoxOne () {
    return (
        <Section customSettings="bg-[url('/cartographer.png')]" bgColor="bg-black" height="h-[50rem]">
            <div className="flex flex-row items-center gap-[5rem]">
                <video controls className="h-auto w-80">
                    <source src="clip.mp4" type="video/mp4"></source>
                </video>
                <div className={`${playfair_display.className} whitespace-pre-line text-white text-2xl`}>
                    {`Emerging from Stratford, Ontario, Katie Girodat is a 19-year-old 
                    singer-songwriter whose heartfelt lyrics and soulful melodies are 
                    capturing attention. 
                    
                    Currently studying at Trent University, Katie has been immersed in 
                    music from a young age, crafting songs that delve into personal 
                    experiences and emotional depth.`}
                </div>
            </div>
        </Section>
    );
    
}