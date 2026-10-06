"use client";
import { useEffect, useState } from "react";

export function Rotator({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    let swap: ReturnType<typeof setTimeout>;
    const t = setInterval(() => {
      setShown(false);
      swap = setTimeout(() => {
        setI((n) => (n + 1) % words.length);
        setShown(true);
      }, 450);
    }, 3200);
    return () => {
      clearInterval(t);
      clearTimeout(swap);
    };
  }, [words.length]);

  return (
    <span
      className="serif inline-block italic text-clay transition-all duration-500"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(8px)",
        filter: shown ? "none" : "blur(4px)",
      }}
    >
      {words[i]}
    </span>
  );
}
