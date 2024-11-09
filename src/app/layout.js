"use client";
import localFont from "next/font/local";
import "./globals.css";
import Sidenav from "@/components/SideNav";
import NextAuthProvider from "@/providers/AuthProvider";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  if (['/', '/auth/error'].includes(pathname) || pathname.startsWith('/admin')) {
    return (
      <html lang="en">
        <head>
          <title>Higher Studies and Placement Resource</title>
        </head>
        <body className="bg-[#F7F7F7] font-family:'font-product-sans'">
          {children}
        </body>
      </html>
    );
  }
  return (
    <NextAuthProvider>
    <html lang="en">
    <head>
          <title>Higher Studies and Placement Resource</title>
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex bg-black antialiased`}
        >
        <Sidenav/>
        {children}
      </body>
    </html>
        </NextAuthProvider>
  );
}
