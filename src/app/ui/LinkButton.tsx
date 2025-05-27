import Image from "next/image";

export default function LinkButton ({ link, src, alt }: {link: string, src: string, alt: string}) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className= "hover:opacity-50 ease-out transition duration-200">
            <Image
                src={src}
                width={50}
                height={50}
                alt={alt}
                className=""
            />
        </a>
    );
}