import React , { useEffect } from "react";
// import Fade from "./components/Fade";
import AOS from "aos";
import "aos/dist/aos.css";
import './roadmap.css'
import '../../header.css'
import '../../App.css'

function Roadmap() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
      <section id="Roadmap" className="mb-5 mt-4 overflow-hidden">				
				<div className="container-lg">
					<div className="text-center in-viewport pt-5 visible full-visible">
						<h2 data-aos={'fade-up'} className="text-primary mt-4 section-title position-relative mb-4 text-uppercase">
							{/* <img src="./images/vectors/crown.png" className="img-fluid crown" alt="Crown" /> */}
							Roadmap
						</h2>

					</div>
				</div>
					
				<div className="roadmap-holder roadmap-holder-1">
					<div className="container-lg position-relative">
						<div data-aos={'fade-down'} className="timeline-holder d-none d-md-flex justify-content-center">
							<div id="trigger1"></div>
							<svg className="timeline-svg-1 " width="288" height="1303.957" viewBox="0 0 288 1303.957" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path id="timeline-1" className="timeline pathStyle" d="M147.351,0c0,42.5-43.5,71.5-41,128.5c2.207,50.31,32.806,114.489,66.345,142.283c33.538,27.794,66.391,53.478,93.391,35.478
								s8.199-40.233-19-44c-32.652-4.522-63.561,12.911-103.087,40.869c-41,29-56.87,64.175-63.649,113.371c-10,50,12,124,79,224
								s20.29,190.528-27,236c-26,25-75.999,27.287-73.999-5.713s46-30,89,0s34.629,79.665-8,150.713c-26.4,44-7.432,108.196,8,159
								s-9.309,61.369-3.352,123.456" stroke="#4D4960" strokeWidth="3" fill="none"></path>
							</svg>
						</div>

						<div className="row justify-content-end roadmap-item mt-5 in-viewport visible">
							<div className="col-xl-5 col-lg-11 col-md-10 col-11 mb-3 mb-md-0">
								<div data-aos={'fade-left'} className="roadmap-item ">
									<div className="mt-2 itemtext2">
										<h3 className="roadmap-title text-primary text-uppercase font-weight-bold">
											Phase <span className="num">1</span> 
										</h3>
										<ul className="roadmap-list">
											<div className="row">
                        <div className="fa fa-star col-1 text-primary py-1_5"></div><div className="col-11"><strong className="text-primary">Creating phenomenal art</strong> by the world class graffiti artists - Arsek&amp;Erase</div>
                      </div>
                        <br />
                      <div className="row">
                        <div className="fa fa-star text-primary col-1 py-1_5"></div><div className="col-11">Huge <strong className="text-primary">Marketing Campaigns</strong></div>
                      </div>
                        <br />
                      <div className="row">
                        <div className="fa fa-star text-primary col-1 py-1_5"></div><div className="col-11"><strong className="text-primary">Free Mint</strong> Whitelist</div>
                      </div>
                        <br />
                      <div className="row">
                        <div className="fa fa-star text-primary col-1 py-1_5"></div><div className="col-11">Wonderful <strong className="text-primary">SWAG Adventure</strong> with $5000 prize</div>
                      </div>
                        <br />
                      <div className="row">
                        <div className="fa fa-star text-primary col-1 py-1_5"></div><div className="col-11">Partnering with other big projects</div>
                      </div>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="row justify-content-end justify-content-xl-start roadmap-item in-viewport visible">
							<div className="col-xl-5 col-lg-11 col-md-10 col-11 mb-3 mb-md-0">
								<div data-aos={'fade-right'} className="roadmap-item">
									<div className="mt-2 itemtext2">
										<h3 className="roadmap-title text-primary text-uppercase font-weight-bold">
											Phase <span className="num">2</span> 
										</h3>
										<ul className="roadmap-list">
											<div className="row">
                        <div className="fa fa-star col-1 text-primary py-1_5"></div><div className="col-11"> Swaga Bears listing on <strong className="text-primary">Magic Eden</strong></div>
                      </div>
                        <br />
                      <div className="row">
                        <div className="fa fa-star text-primary col-1 py-1_5"></div><div className="col-11"><strong className="text-primary">Building the greatest ALPHA group on the Solana blockchain</strong><br />Access to the ALPHA group for crypto and NFT knowledge and signals and personal development for all holders.</div>
                      </div>
                        <br />
                      <div className="row">
                        <div className="fa fa-star text-primary col-1 py-1_5"></div><div className="col-11"><strong className="text-primary">DAO and Launchpad</strong><br /> 50% from the royalties and 20% from mint sales are going directly to a DAO wallet. The DAO will decide where to invest. 1 NFT = 1 voting power The 20% from mint sales will be used as a funding for 1 or 2 projects presented by the holders.</div>
                      </div>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="row justify-content-end roadmap-item in-viewport visible">
							<div className="col-xl-5 col-lg-11 col-md-10 col-11 mb-3 mb-md-0">
								<div data-aos={'fade-left'} className="roadmap-item fast">
									<div className="mt-2 itemtext2">
										<h3 className="roadmap-title text-primary text-uppercase font-weight-bold">
											Phase <span className="num">3</span> 
										</h3>
										<strong className="text-primary">
											Second Collection - Galactic Swaga Bears
										</strong>
										<p className="mb-0">
											Holders who don't sell for 14 days will get a serum, 
											which can be used to mutate your Swaga Bear to a
											Galactic Swaga Bear
										</p>
									</div>
								</div>
							</div>
						</div>


						<div className="row justify-content-end justify-content-xl-start roadmap-item in-viewport visible">
							<div className="col-xl-5 col-lg-11 col-md-10 col-11 mb-3 mb-md-0">
								<div className="roadmap-item " data-aos={'fade-right'}>
									<div className="mt-2 itemtext2">
										<h3 className="roadmap-title text-primary text-uppercase font-weight-bold">
											Phase <span className="num">4</span> 
										</h3>
										<strong className="text-primary">
											Exclusive Events
										</strong>
										<p className="mb-0">
											Holders who don't sell for 90 days will get access to our exclusive events in the best cities all over the world.
										</p>
										<strong className="text-primary">
											Merch
										</strong>
										<p className="mb-0">
											Collaboration with celebrity brands and creating the best SWAG wearables 
										</p>
									</div>
								</div>
							</div>
						</div>


						<div className="row justify-content-end roadmap-item mt-5 in-viewport visible">
							<div className="col-xl-5 col-lg-11 col-md-10 col-11 mb-3 mb-md-0">
								<div className="roadmap-item" data-aos={'fade-left'}>
									<div className="mt-2 itemtext2">
										<h3 className="roadmap-title text-primary text-uppercase font-weight-bold">
											Phase <span className="num">5</span> 
										</h3>
										<h4 className="text-uppercase font-weight-normal itemtext2">
											coming soon
										</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        );
}

export default Roadmap;