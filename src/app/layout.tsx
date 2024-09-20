import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
 });

const neueMontreal = localFont({
  src: "./fonts/NeueMontreal-Regular.otf",
  variable: "--font-montreal"
});

export const metadata: Metadata = {
  title: "Florence Eze",
  description: "Product Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${neueMontreal.className}   bg-[#0A0A0A] text-[#FFFFFF] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
