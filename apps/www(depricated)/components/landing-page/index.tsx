import DownloadPlusWhitelist from "./download-plus-whitelist"
import FeatureOne from "./reason-one"
import Features from "./reason-one"
import FeatureThree from "./reason-three"
import FeatureTwo from "./reasson-two"
import Footer from "./footer"
import Info from "./info"
import ScrollIndicator from "./scroll-indicator"
import Scrollbar from "./scrollbar"
import Whitelistbar from "./whitelistbar"
import React from 'react'

const LandingPage
 = () => {
  return (
    <>
        {/* Sections total 5 */}
        <Info />
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
        <DownloadPlusWhitelist />

        {/* Landing Page specific compoenents */}
        <ScrollIndicator />
        <Scrollbar />
        <Whitelistbar />

        {/* Awesome Pro footer */}
        <Footer />
    </>
  )
}

export default LandingPage
export {

    DownloadPlusWhitelist,
    Features,
    Info,
    ScrollIndicator,
    Scrollbar,
    Whitelistbar

}