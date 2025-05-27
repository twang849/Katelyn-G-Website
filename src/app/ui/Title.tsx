import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({subsets: ['latin']});

export default function Title () {
    return (
        <div id="title" className={`${playfair_display.className} select-none z-10  text-[10rem] leading-none`}>
            <div className="hover:text-gray-500 text-shadow-lg transition duration-300 ease-out text-white text-center">
                KATELYN <br/>
                GIRODAT
            </div>
        </div>
    );
}