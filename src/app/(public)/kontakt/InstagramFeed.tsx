"use client";
import Link from "next/link";
import { useEffect } from "react";

export const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://scripts.feedspring.co/instagram-attrs.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); // router prop or w/e
  return (
    <Link href="https://www.instagram.com/slowood.sk/" target="_blank">

      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <div feedspring="inst_GDIXATmVB3yKwhr2kvm7g" className="pt-4"   {...({} as any)} // Type assertion to bypass type-checking
      >
        <h3 className="uppercase font-bold px-6 pb-2">Najnovšie realizácie</h3>
        {/* <img feed-field="avatar"></img>
                                <div feed-field="username"></div>
                                <div feed-field="follower-count"></div>
                                <div feed-field="bio"></div> */}

        <div className="grid grid-cols-3 gap-2 px-6">
          {
            [1, 2, 3, 4, 5, 6].map((_, index) => (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <div key={index} feedspring="post"   {...({} as any)} // Type assertion to bypass type-checking
              >
                <img feed-field="img" className="aspect-square"></img>
              </div>
            ))
          }
        </div>
      </div>
    </Link>
  )
}