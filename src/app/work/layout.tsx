import type { Metadata } from "next";
import Nav from "@/components/Nav/Nav";
import ProjectFooter from "@/components/ProjectFooter/ProjectFooter";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Nav />
        {children}
        <ProjectFooter />
      </body>
    </html>
  );
}
