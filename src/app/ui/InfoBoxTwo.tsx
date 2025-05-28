import Section from "./Section";
import { Merriweather_Sans } from "next/font/google";

const font = Merriweather_Sans({subsets: ['latin'], weight:['400']});

export default function InfoBoxTwo () {
    return (
        <Section bgColor="bg-black" height="h-[40rem]">
        <div className="flex flex-row items-center gap-[5rem]">
          <div className={`${font.className} leading-relaxed whitespace-pre-line text-white text-2xl`}>
            {`Katie's musical style is influenced by artists such as Tate McRae,
            reflecting a modern pop sensibility infused with introspective 
            storytelling. Her performances, including a notable cover of 
            The Cranberries' "Zombie," highlight her vocal prowess and emotional
            expressiveness .

            As she continues to develop her artistry, Katie Girodat stands out 
            as a promising talent in the Canadian music scene, offering a fresh 
            voice that speaks to the complexities of youth and personal growth.`}
          </div>
        </div>
      </Section>
    );
}