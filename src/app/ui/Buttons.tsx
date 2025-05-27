import LinkButton from "./LinkButton";

export default function Buttons () {
    return (
        <div className={`gap-8 absolute top-7 flex flex-row items-start justify-center`}>
            <LinkButton alt="Instagram" src="/instagram.png" link="https://www.instagram.com/katiegirodat_/" />
            <LinkButton alt="Spotify" src="/spotify.png" link="https://open.spotify.com/user/mom19744?si=9101ef698ddc415c" />
        </div>
    );
}