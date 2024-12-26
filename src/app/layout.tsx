import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";


const twCent = localFont({
  src: './Tw-Cent-MT.ttf',
  display: 'swap',
  variable: '--font-tw-cent',
})

export const metadata: Metadata = {
  title: "Slowood - dizajnové výrobky z dreva",
  description: "",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${twCent.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
