import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import './home.css';
import './cushome.css'

function Home() {
  useEffect(() => {
    AOS.init({duration: 2000,once: true});
    AOS.refresh();
  }, []);
  
  return (
			<div id="Home" className="aligncenter container my-0 row mx-auto mt-5 ">
        <div className="col-md-6 col-sm-12">
          <img data-aos={"flip-right"} src="./images/vectors/bear-symbol.png" alt="The Bear" className="img-fluid flip-in-y hero-bear img-visibility App-logo"  />
        </div>
        <div className="col-md-6 col-sm-12 aboutInfo">
          <h1 className="text-center main-title mt-3 text-uppercase font-integral"  data-aos="fade-up">Swaga Bears</h1>
          <h3 className="text-center font-integral">
            Mint Date: 
            <span className="text-primary font-integral" style={{ textOverflow: 'initial'}}>
              20.04 / 17:00 GMT
              <a className="btn btn-primary mt-4 mr-sm-4 mb-3 mb-sm-0" href="https://discord.gg/k8reTCMZVW" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-discord" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path><path d="M7 16.5c3.5 1 6.5 1 10 0"></path><path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path><path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path></svg>
                  Join on discord
                </a>
            </span>
          </h3>
        </div>
      </div>
  );
}

export default Home;
