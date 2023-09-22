import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import './home.css';

function Mint() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
			<section id="Mint" className="bears-seciton py-5 in-viewport overflow-hidden">
				<img data-aos={"fade-right"} src="./images/bears/mint-bear-1.png" className="mint-bear-1 " alt="Surprise Bear" />
				<img data-aos={"fade-left"} src="./images/bears/mint-bear-2.png" className="mint-bear-2 " alt="Surprise Bear" />

				<div data-aos={"fade-up"} className="container-lg">
					<div className="text-center">
						<h4 className="top-title slow">Mint Information</h4>
						<h2  data-aos={"fade-up"} className="text-primary section-title quotes mb-4 text-center text-uppercase">
							{/* <img src="./svg/left-quote.svg" alt="Quote Mark" className="img-fluid quote-mark" /> */}
							Make them stop &amp; gaze.
							{/* <img src="./svg/right-quote.svg" alt="Quote Mark" className="img-fluid quote-mark" /> */}
						</h2>
						<h5 className="sub-title text-primary font-weight-bold  fast">
							Mint your own unique Swaga Bear!
						</h5>

						<p className="mb-0 ">
							Total supply - <strong>5555 NFTs</strong>
						</p>

						<p className="mb-0 ">
							Free mint presale - <strong>1300 NFTs</strong>
						</p>

						<p className="">
							Public sale - <strong>4255 NFTs</strong>
						</p>

						<p className="">
							Price - <strong>1.5 SOL</strong>
						</p>

						<p className="">
							Date - <strong>20.04.2022 17:00 GMT</strong>
						</p>

						<a className="btn btn-primary btn-lg mt-4 mr-sm-4 mb-3 mb-sm-0" href="#Mint" target="">
							<span className="fa fa-gift"></span> &nbsp;
							<strong>MINT NOW</strong>
						</a>

					</div>
				</div>
			</section>
  );
}

export default Mint;
