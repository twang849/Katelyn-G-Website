'use client';

import Section from "./Section";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Buttons from "./Buttons";
import Title from "./Title";
import Subtitle from "./Subtitle";

export default function Hero () {
    return (
        <Section customSettings="bg-radial from-pink-800 via-blue-800 to-purple-950 relative h-screen" bgColor="bg-purple-900">
            <div className="flex flex-col items-center pb-[6rem] gap-10">
                <Buttons/>
                <div className="grid grid-cols-[1fr_auto_1fr] mt-10 items-center pb-5">
                    <DotLottieReact
                        src="https://lottie.host/96f608ec-952e-4cb2-a5e7-01d0ee5b27d3/nrgphz50SP.lottie"
                        loop
                        autoplay
                        className="w-[52rem] -mr-10"
                    />
                    <Title/> 
                    <DotLottieReact
                        src="https://lottie.host/96f608ec-952e-4cb2-a5e7-01d0ee5b27d3/nrgphz50SP.lottie"
                        loop
                        autoplay
                        className="w-[52rem] -ml-10"
                    /> 
                </div>
                <Subtitle/>
            </div>
        </Section>
    );
}