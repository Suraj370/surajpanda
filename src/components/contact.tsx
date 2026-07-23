import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const EMAIL_DISPLAY = "surajpanda2077 [ @ ] gmail [ . ]com";
const EMAIL_MAILTO = "surajpanda2077@gmail.com";

export function Contact() {
  return (
    <section id="contact" className="relative px-4 pb-8 pt-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="gold-border-glow rounded-2xl border border-gold/25 bg-gradient-to-b from-card to-background px-6 py-16 text-center sm:px-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-gold/60">
            Let&apos;s connect
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gold sm:text-4xl">
            Contact Me
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gold/65">
            Have a project in mind or want to collaborate? Drop me an email —
            I&apos;d love to hear from you.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button
              size="lg"
              nativeButton={false}
              className="h-12 gap-2 bg-gold px-8 text-base text-primary-foreground hover:bg-gold-light"
              render={
                <a
                  href={`mailto:${EMAIL_MAILTO}`}
                  aria-label={`Email ${EMAIL_DISPLAY}`}
                />
              }
            >
              <Mail data-icon="inline-start" className="size-5" />
              Contact Me
            </Button>

            <a
              href={`mailto:${EMAIL_MAILTO}`}
              className="group inline-flex items-center gap-2 text-gold/80 transition-colors hover:text-gold-light"
            >
              <Mail className="size-4 text-gold-dark transition-colors group-hover:text-gold" />
              <span className="font-mono text-sm tracking-wide sm:text-base">
                {EMAIL_DISPLAY}
              </span>
            </a>

            <div className="mt-2 flex items-center gap-2 text-sm text-gold/50">
              <MapPin className="size-3.5" />
              <span>Open to remote & on-site opportunities</span>
            </div>
          </div>
        </div>

        <Separator className="mt-12 bg-gold/15" />

        <footer className="flex flex-col items-center justify-between gap-3 py-8 text-sm text-gold/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Suraj Panda. All rights reserved.
          </p>
          <p className="text-gold/35">Built with Next.js & shadcn/ui</p>
        </footer>
      </div>
    </section>
  );
}
