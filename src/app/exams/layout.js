"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";


export default function PoliciesLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <div className="flex w-full h-[40px] justify-center z-10 relative">
        <div className="flex w-[80%] fixed bg-gray-800 rounded-full p-5 items-center text-white mt-4">
          {[
            { name: "Gate", path: "/exams/gate" },
            { name: "GRE", path: "/exams/gre" },
            { name: "CAT", path: "/exams/cat" },
            { name: " IELTS", path: "/exams/ielts" },
          ].map(({ name, path }) => (
            <div key={path} className="relative">
              <Link
                href={path}
                className={clsx(
                  "ml-8 text-application font-bold p-2 ",
                  {
                    " border-b-2 border-blue-50": pathname === path,
                  }
                )}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="max-h-100vh overflow-y-auto">{children}</div>
    </>
  );
}
