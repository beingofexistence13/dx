import { Navbar, Applebar, Bottombar, Sidebar } from "../src/components";
import "../src/ui/globals.css";
import { Providers } from "./provider";
import * as React from 'react';




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="2xs:bg-slate-950 xs:bg-gray-900 sm:bg-zinc-900 md:bg-lime-400 lg:bg-emerald-500 xl:bg-[#000] 2xl:bg-violet-800">
        <Providers>
          {/* <Navbar />
          <Sidebar />
          <Applebar />
          <Bottombar /> */}
          <main>{children}</main>
        </Providers>
      </body>
    </html >
  );
}
