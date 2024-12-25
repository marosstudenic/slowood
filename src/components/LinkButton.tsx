import Link from "next/link"

export const LinkButton = ({ link, className, children }: { link: string, className: string, children: React.ReactNode }) => {
    return (
        <Link href={link} className={`border-2 border-white text-center h-[58px] w-[207px] max-md:h-[42px] max-md:w-[150px] flex justify-center items-center${className}`}>
            {children}
        </Link>
    )
}