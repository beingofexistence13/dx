import DownloadPlusWhitelist from "./download-plus-whitelist";
// import FeatureOne from "./reason-one";
// import FeatureThree from "./reason-three";
// import FeatureTwo from "./reason-two";
import Footer from "./footer";
import Info from "./info";
import ScrollIndicator from "./scroll-indicator";
import Scrollbar from "./scrollbar";
import Whitelistbar from "./whitelistbar";
import React from "react";
// import FeatureFour from "./reason-four";
// import FeatureFive from "./reason-five";

const LandingPage = () => {
  return (
    <>
      {/* Sections total 5 */}
      <Info />
      {/* <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <FeatureFour />
      <FeatureFive /> */}
      <DownloadPlusWhitelist />

      {/* Landing Page specific compoenents */}
      <ScrollIndicator />
      <Scrollbar />
      <Whitelistbar />

      {/* Awesome Pro footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
export {
  DownloadPlusWhitelist,
  // FeatureOne,
  // FeatureTwo,
  // FeatureThree,
  // FeatureFour,
  // FeatureFive,
  Info,
  ScrollIndicator,
  Scrollbar,
  Whitelistbar,
};
