"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { signOut } from "next-auth/react";



const Sidenav = () => {
  const pathname = usePathname();

  const navLink = [
    { name: "Home", 
      href: "/home", 
      },
    {
      name: "Exams",
      href: "/exams",
      parent: "/exams",
     
    },
    {
      name: "Placements",
      href: "/placements",
      parent: "/placements",

   
    },
    {
      name: "Q & A",
      href: "/questions",
      parent: "/questions",
      
    },
  ];
  return (
    <aside
      className="flex flex-col no-scrollbar px-6 py-7 bg-[#F6F6F6] gap-7 bg-sidebar shadow-2xl transition-all duration-300 ease-linear z-50 left-0 top-0 ${sideBar} h-screen w-56 overflow-y-scroll translate-x-0 absolute lg:static"
    >

      <div className="flex justify-center mt-[100%] flex-col">
        {navLink.map((link) => {
          const isActive = link.parent
            ? pathname.includes(link.parent)
            : pathname === link.href;
          return (
            <Link
              href={link.href}
              key={link.name}
              className={clsx(
                "py-2 px-2 rounded-[5px] gap-2 min-w-max text-neutral-500 text-lg font-normal  my-1 flex items-center",
                {
                  " bg-black text-white": isActive,
                }
              )}
            >
              <div>{link.icon}</div>
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="border-t border-neutral-500/opacity-60">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="rounded-[5px] my-4 text-neutral-500 text-lg font-normal flex  items-center"
        >
          Logout
        </button>
      </div>

    </aside>
  );
};

export default Sidenav;
