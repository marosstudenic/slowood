"use client";
import { useRouter } from "next/navigation";

export const BackButton = () => {
    const router = useRouter();
    return (
        <button className="text-[#5f5f5f] leading-none flex justify-center gap-1 items-center" onClick={() => router.back()}><span className="font-serif">&lt;</span><span className="">späť</span></button>
    )
}