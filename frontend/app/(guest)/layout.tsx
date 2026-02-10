"use client";

import Header from "@/components/common/Header"
import { useState } from "react";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [active, setActive] = useState("Home");
  return (
    <>
      <Header isVisited={active} setIsVisited={setActive}/>
      <main className="pt-20">
        {children}
      </main>
    </>
  )
}