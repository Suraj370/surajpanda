import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const title = "Suraj Panda — Software engineer";
const description = "Portfolio of Suraj Panda: backend systems, AI tooling and thoughtful interfaces.";

export const metadata: Metadata = {
  metadataBase: new URL("https://surajpanda.vercel.app"),
  title,
  description,
  openGraph: { title, description, url: "/", siteName: "Suraj Panda", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

// Runs before first paint so the saved or system theme never flashes.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
