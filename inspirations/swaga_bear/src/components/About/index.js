import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

import './about.css'

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (

    <div id="About"  className="my-5 in-viewport overflow-x-hidden meteorit-top">
      <div className="container-lg my-0 py-5 row mx-auto mt-5 ">
        
        <div data-aos={'fade-right'} className="col-md-6 col-sm-12 aboutInfo px-3 text-lg-left">
          <h2 data-aos={'fade-right'} className="text-primary section-title quotes mb-4 fast text-lg-left text-uppercase" style={{textAlign: 'center'}}>
            {/* <img src="./svg/left-quote.svg" alt="Quote Mark" className="img-fluid quote-mark  img-visibility" /> */}
            I was born to STAND OUT.
            {/* <img src="./svg/right-quote.svg" alt="Quote Mark" className="img-fluid quote-mark  img-visibility" /> */}
          </h2>

          <p className="sub-title mb-4   text-lg-left " >
            Swaga Bears is a collection of 5555 NFTs building the greatest ALPHA group on the Solana Blockchain. 
          </p>

          <p className="  text-lg-left ">
            20% from mint sales and 50% from royalties will go directly to the DAO wallet.
          </p>

          <p className="  text-lg-left ">
            Owning Swaga Bears gets you access to the ALPHA GROUP and makes you an exclusive member of the SB DAO with voting rights. <br />
            Swaga Bears holders will have the opportunity to launch projects through the Swaga Bears launchpad and to get funding from the DAO wallet funds. 
          </p>

          
        </div>
        
        <div className="col-md-6 timeline-svg-2">
	        <img data-aos={"fade-left"} src="./images/bears/bear-1.png" className="img-fluid flip-in-y hero-bear App-logo" alt="Big Bear" />
        </div>

      </div>

      <ul className="mt-5 astro-bears d-flex justify-content-between list-unstyled">
          <li><img src="./images/astro-bears/bear-1.png" className="img-fluid astro-bear-1 astro-levitation img-visibility slow" alt="Astro Bear"  /></li>
          <li><img src="./images/astro-bears/bear-2.png" className="img-fluid astro-bear-2 astro-levitation img-visibility slow" alt="Astro Bear"  /></li>
          <li><img src="./images/astro-bears/bear-3.png" className="img-fluid astro-bear-3 astro-levitation img-visibility" alt="Astro Bear"  /></li>
          <li><img src="./images/astro-bears/bear-4.png" className="img-fluid astro-bear-4 astro-levitation img-visibility fast" alt="Astro Bear"  /></li>
          <li><img src="./images/astro-bears/bear-5.png" className="img-fluid astro-bear-5 astro-levitation img-visibility" alt="Astro Bear"  /></li>
          <li><img src="./images/astro-bears/bear-6.png" className="img-fluid astro-bear-6 astro-levitation img-visibility slow" alt="Astro Bear"  /></li>
          <li><img src="./images/astro-bears/bear-7.png" className="img-fluid astro-bear-7 astro-levitation img-visibility" alt="Astro Bear"  /></li>
          <li><img src="./images/astro-bears/bear-8.png" className="img-fluid astro-bear-8 astro-levitation img-visibility fast" alt="Astro Bear"  /></li>
          <li><img src="./images/astro-bears/bear-9.png" className="img-fluid astro-bear-9 astro-levitation img-visibility" alt="Astro Bear"  /></li>
      </ul>
    </div>

  );
}

export default About;
