import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import DotPattern from "@/components/magicui/dot-pattern";

export const metadata: Metadata = {
  title: "BioEngine",
  description:
    "Generate your perfect Twitter bio with the help of AI. Just answer a few questions and let our AI craft a bio that truly represents you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, "font-sans")}>
        <DotPattern className="-z-10 opacity-50" />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
