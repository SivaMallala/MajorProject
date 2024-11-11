"use client";
import React, { useState } from "react";
import "../globals.css";
import { usePathname } from "next/navigation";
import Gre from "./gre/page";
import Cat from "./cat/page";
import Gate from "./gate/page";


function Page() {
  const pathname = usePathname();

  return (
    <>
      <main className="">
        <div className=" h-10  md:flex gap-x-12 pl-20  py-1 px-4 text-gray-600">
          <div className=" h-10 bg-neutral-100/opacity-50  flex items-center gap-12 ">
            <div className="max-h-100vh overflow-y-auto">
              {pathname === "/exams/gate" && <Gate/>}
              {pathname === "/exams/gre" && <Gre/>}
              {pathname === "/exams/cat" && <Cat/>}
              {pathname === "/exams/ielts" && <Request />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page;
