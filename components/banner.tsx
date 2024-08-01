"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function Banner() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleMouseEnter = () => {
    if (hasInteracted && audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleDocumentClick = () => {
    setHasInteracted(true);
  };

  return (
    <div
      className="relative w-full h-32 sm:h-[400px] my-10"
      onClick={handleDocumentClick}
    >
      <Image
        src="/deprem.jpg"
        alt="harita"
        fill
        quality={100}
        className="object-cover hover:scale-105 duration-200 ease-in-out cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <audio ref={audioRef} src="/deprem_ses.mp3" />
    </div>
  );
}
