import * as React from "react"
import { Whitelistbar } from "@/components/landing-page";
import Feature from "@/components/landing-page/feature";
import Info from "@/components/landing-page/info";
import MoreInfo from "@/components/landing-page/more-info";
import Package from "@/components/landing-page/package";
import ThreeDeeCard from "@/components/landing-page/three-dee-card";
import VerticalInfo from "@/components/landing-page/vertical-info";
import Whitelist from "@/components/landing-page/whitelist";


export default function Home() {
  return (
    <main className="main h-auto w-full">
      <div className="landingPage min-h-[100vh] ">

        <Whitelistbar />
        {/* <Info />
        <MoreInfo /> */}
        <VerticalInfo />
        <ThreeDeeCard />
        <Feature />
        <Package />
        <Whitelist />

      </div>
    </main>
  )
}
