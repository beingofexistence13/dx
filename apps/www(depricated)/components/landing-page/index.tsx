import DownloadPlusWhitelist from "./download-plus-whitelist"
import Features from "./features"
import Info from "./info"
import ScrollIndicator from "./scroll-indicator"
import Scrollbar from "./scrollbar"
import Whitelistbar from "./whitelistbar"
import React from 'react'

const LandingPage
 = () => {
  return (
    <>
        <DownloadPlusWhitelist />
        <Features />
        <Info />
        <ScrollIndicator />
        <Scrollbar />
        <Whitelistbar />
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