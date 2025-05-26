import { playfair_display } from "../layout"

export default function Title () {
    return (
        <div className={`${playfair_display.className} fadeIn select-none z-10 hover:text-gray-600 transition duration-500 text-black text-[10rem] leading-none`}>
            <div className="text-center">
                KATELYN <br/>
                GIRODAT
            </div>
        </div>
    );
}