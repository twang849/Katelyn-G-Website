import { Merriweather } from "next/font/google";

const merriweather = Merriweather({subsets: ['latin'], weight: ['400']});
// const playfair_display = Playfair_Display({subsets: ['latin'], weight: ['400']});

export default function Subtitle () {
    return (
      <div id="subtitle" className={`${[merriweather.className]} hover:text-gray-950 ease-out text-shadow-lg transition duration-500 text-white text-2xl`}>
        The 19-year-old singer-songwriter whose heartfelt lyrics and soulful melodies are capturing attention.
      </div>  
    );
}