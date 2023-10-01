import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import './home.css';

function Story() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  
  return (
			<section id="like-a-boss" className="my-5 py-5 in-viewport overflow-x-hidden meteorit-bottom visible ">
				<div className="container-lg my-5">
					<div className="row justify-content-center">
						<div data-aos={'fade-right'} className="col-lg-6 col-sm-10 text-uppercase">
							<h4 data-aos={'fade-right'} className="top-title mb-0 text-lg-left ">The Story</h4>
							<h2 className="text-primary section-title quotes mb-4 text-lg-left " >
								{/* <img src="./svg/left-quote.svg" alt="Quote Mark" className="img-fluid quote-mark" /> */}
								<span className="title-small d-inline-block">
									Live the life that people write novels about!
								</span>
								<br />
								Like a boss!
								{/* <img src="./svg/right-quote.svg" alt="Quote Mark" className="img-fluid quote-mark" /> */}
							</h2>
						</div>

						<div data-aos={'fade-left'} className="col-lg-6 col-sm-10 mt-4">
							<p data-aos={'fade-left'} className="">
								5,555 – The Angel number that is you telling you to keep going on the same 
								road you are on right now, because your <span className="text-primary">DREAMS</span> and <span className="text-primary">ASPIRATIONS</span> are soon going 
								to become a <span className="text-primary">REALITY</span>!
								The Swaga Bear project inspires you to <span className="text-primary">seek out the best in life and live the life you have always dreamed of</span>!
							</p>

							<p className="">
								Get out of the cage - be strong, be classy, be alive! SWAGA BEAR needs YOU to build together the material lifestyle empire of our desires! Let’s break the matrix of stereotypes and don’t be the boring 9 to 5 pussy! Come with us and live the life you deserve! <span className="text-primary">Be the change!</span>
							</p>
						</div>
					</div>
				</div>
			</section>
  );
}

export default Story;
