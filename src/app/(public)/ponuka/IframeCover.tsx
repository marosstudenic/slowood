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
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        cursor: "pointer",
                        position: "absolute",
                        zIndex: 1,
                    }}
                />
            </div>
        )
    }

    return (
        <div
            style={{ position: "relative", width: "100%", height: "100%" }}
            key="3dwarehouse"
        >
            {!showIframe && (
                <motion.img
                    src={coverImageUrl}
                    alt="Cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        cursor: "pointer",
                        position: "absolute",
                        zIndex: 1,
                    }}
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
                    style={{
                        position: "absolute",
                        bottom: "25px",
                        left: "25px",
                        textAlign: "center",
                        width: "207px",
                        height: "58px",
                        backgroundColor: "#000",
                        fontFamily: "Tw Cen MT Regular",
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                        zIndex: 3,
                    }}
                >
                    <p
                        style={{
                            fontSize: "16px",
                            textTransform: "uppercase",
                            fontFamily: "Tw Cen MT Bold",
                            letterSpacing: "0.1em",
                            color: "#FFF",
                            fontWeight: "bold",
                        }}
                    >
                        Prezrieť v 3D
                    </p>
                </div>
            )}
        </div>
    )
}
