"use client";

import "../globals.css";
import NextAuthProvider from "@/providers/AuthProvider";
import { usePathname } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  return (
    <NextAuthProvider>
      <div lang="en" className="flex flex-row bg-black antialiased min-h-screen">
        {/* Show AdminNav on admin routes except when the path is exactly "/admin" */}
        {pathname.includes("/admin") && pathname !== "/admin" && <AdminNav />}
        
        <main className="mt-5 ml-[13%] w-full">
          {children}
        </main>
      </div>
    </NextAuthProvider>
  );
}
