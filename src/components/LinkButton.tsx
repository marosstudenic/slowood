import Link from "next/link"



export const LinkButton = ({ link, className, text, color = "white", weight = "thin" }: { link: string, className: string, text: string, color?: "white" | "black", weight: "thin" | "bold" }) => {
    return (
        <Link href={link} className={`text-cente w-28 md:w-40 h-8 md:h-10 flex justify-center items-center ${className} ${color === "white" ? "border-white text-white" : "border-black text-black"} ${weight === "thin" ? "border" : "border-2"}`}>
            <span className={`mx-auto my-auto uppercase tracking-wide text-xs font-bold max-md:text-xs ${weight === "thin" ? "font-normal" : "font-bold"}`}> {text}</span>
        </Link>
    )
}