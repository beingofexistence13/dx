// "use client"

import Feature from "@/component/landing-page/feature";
import Info from "@/component/landing-page/info";
import MoreInfo from "@/component/landing-page/more-info";
import Package from "@/component/landing-page/package";
import ThreeDeeCard from "@/component/landing-page/three-dee-card";
import VerticalInfo from "@/component/landing-page/vertical-info";
import Whitelist from "@/component/landing-page/whitelist";


export default function Home() {
  return (
    <main className="main h-auto w-full">
      <div className="landingPage min-h-[100vh] max-w-xl mx-auto">

        
        {/* <span className="demo-text">
          LandingPage
        </span> */}
        <Info />
        <MoreInfo />
        <VerticalInfo />
        <ThreeDeeCard />
        <Feature />
        <Package />
        <Whitelist />

      </div>
    </main>
  )
}
