export default function LinkButton ({ link, text }: {link: string, text: string}) {
    return (
        <a href={link} className="text-2xl hover:text-blue-500 transition duration-300">
            {text}
        </a>
    );
}