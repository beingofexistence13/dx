"use client"

import * as React from "react"
import Image from "next/image"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="image-container glassmorphisum fixed top-0 left-0 w-[100%] min-h-screen border rounded-lg">
        <Image priority src="/night-shy.jpeg" fill alt="Sukuna" />
      </div>
      <div className="w-auto h-auto">Fluid Simulation Controller</div>
    </section>
  )
}
