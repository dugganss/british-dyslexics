import Image from "next/image";

export default function Logo () {
    return (
        <Image className="object-cover" src="/logo.png" alt="British Dyslexics Logo" width={44} height={44} />
    )
}