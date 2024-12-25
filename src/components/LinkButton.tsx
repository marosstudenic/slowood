import Link from "next/link"

export const LinkButton = ({ link, className, children }: { link: string, className: string, children: React.ReactNode }) => {
    return (
        <Link href={link} className={`border-2 border-white text-center py-2 px-8 flex justify-center items-center${className}`}>
            {children}
        </Link>
    )
}