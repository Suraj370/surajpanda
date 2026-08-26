import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Suraj Panda — Digital builder & designer", description: "Portfolio of Suraj Panda, a full-stack engineer and UI/UX designer building thoughtful digital products." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className="min-h-full">{children}</body></html>; }
