"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const roles = ["Full Stack Engineer", "UI/UX Designer"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeaving(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setLeaving(false);
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(212,175,55,0.12), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(240,208,96,0.25), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <Badge
          variant="outline"
          className="mb-6 animate-fade-up border-gold/40 bg-gold/5 px-4 py-1.5 text-gold"
          style={{ animationDelay: "0.1s" }}
        >
          <Sparkles className="mr-1.5 size-3.5 text-gold-light" />
          Available for opportunities
        </Badge>

        <p
          className="mb-3 animate-fade-up text-sm font-medium uppercase tracking-[0.25em] text-gold/70"
          style={{ animationDelay: "0.2s" }}
        >
          Hello, I&apos;m
        </p>

        <h1
          className="animate-fade-up text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="gold-gradient-text">Suraj Panda</span>
        </h1>

        <div
          className="mt-6 flex h-12 items-center justify-center animate-fade-up sm:h-14"
          style={{ animationDelay: "0.45s" }}
        >
          <span
            key={index}
            className={`text-2xl font-semibold text-gold-light sm:text-3xl md:text-4xl ${
              leaving ? "animate-role-out" : "animate-role-in"
            }`}
          >
            {roles[index]}
          </span>
        </div>

        <p
          className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-gold/70 sm:text-lg"
          style={{ animationDelay: "0.55s" }}
        >
          Crafting seamless digital experiences from pixel-perfect interfaces
          to scalable full-stack systems — where design meets engineering.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          <Button
            size="lg"
            nativeButton={false}
            className="h-11 bg-gold px-6 text-primary-foreground hover:bg-gold-light"
            render={<a href="#projects" />}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            className="h-11 border-gold/40 bg-transparent px-6 text-gold hover:bg-gold/10 hover:text-gold-light"
            render={<a href="#contact" />}
          >
            Get in Touch
          </Button>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 flex flex-col items-center gap-1 text-gold/50 transition-colors hover:text-gold"
        aria-label="Scroll to projects"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
