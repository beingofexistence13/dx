import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'font-awesome/css/font-awesome.min.css'; 

// import './home.css';

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
			<footer className="container mt-5 bears-seciton align-center  overflow-hidden">
			<div className="container-lg">

				<div data-aos={'fade-up'} className="d-flex justify-content-center align-items-center flex-column flex-md-row mb-5">

					<ul className="navbar-nav mr-xl-2 d-flex flex-row mb-3 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#roadmap">Roadmap</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">Team</a>
              </li>
          </ul>
          <ul className="social-icons">
            <li>
              <a href="https://twitter.com/SwagabearsNFT" target="_blank">
                {/* <span className="icon icon-twitter-full"></span> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path></svg>
              </a>
            </li>

            <li>
              <a href="https://discord.gg/k8reTCMZVW" target="_blank">
                {/* <span className="icon icon-discord-full"></span> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-discord" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path><path d="M7 16.5c3.5 1 6.5 1 10 0"></path><path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path><path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path></svg>
              </a>
            </li>
          </ul>

				</div>

			</div>
		</footer>
  );
}

export default Home;
