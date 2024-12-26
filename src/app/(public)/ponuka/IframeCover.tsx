"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";

export function IframeCover({ iframeUrl, coverImageUrl }: { iframeUrl: string; coverImageUrl: string }) {
    const [showIframe, setShowIframe] = React.useState(false)
    const iframeRef = React.useRef(null)

    const handleClick = () => {
        setShowIframe(true)
    }

    if (iframeUrl === "") {
        return (
            <div
                style={{ position: "relative", width: "100%", height: "100%" }}
                key="3dwarehouse"
            >
                <Image
                    src={coverImageUrl}
                    alt="Cover"
                    className="object-cover w-full h-full cursor-pointer z-[1]"
                />
            </div>
        )
    }

    return (
        <div
            className="relative h-full w-full"
            key="3dwarehouse"
        >
            {!showIframe && (
                <motion.img
                    src={coverImageUrl}
                    alt="Cover"
                    className="object-cover w-full h-full cursor-pointer z-[1] absolute"
                    onClick={handleClick}
                />
            )}

            <iframe
                ref={iframeRef}
                src={iframeUrl}
                frameBorder="0"
                width="1300"
                height="800"
                allowFullScreen
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    display: "block",
                    position: "relative",
                    zIndex: 0,
                }}
                title="3D Content"
            />
            {!showIframe && (
                <div
                    onClick={handleClick}
                    className="absolute bottom-4 left-4 bg-black p-2  cursor-pointer z-10"
                >
                    <p

                        className="text-white uppercase text-sm tracking-wider"
                    >
                        Prezrieť v 3D
                    </p>
                </div>
            )}
        </div>
    )
}
