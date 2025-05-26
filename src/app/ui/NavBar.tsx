import LinkButton from "./LinkButton";
import { playfair_display } from "../layout";

export default function NavBar () {
    return (
        <div className={`${playfair_display.className} gap-8 flex flex-row justify-center items-end pb-6 w-screen bg-purple-900 h-[5rem]`}>
            <LinkButton text="Instagram" link="https://www.instagram.com/katiegirodat_/" />
            <LinkButton text="Spotify" link="https://open.spotify.com/user/mom19744?si=9101ef698ddc415c" />
        </div>
    );
}