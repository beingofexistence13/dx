import React, {useEffect} from "react";
import { Accordion } from "react-bootstrap";
// import { getOverlayDirection } from "react-bootstrap/esm/helpers";
import Accordionitem from "./Accordionitem";
// import Fade from "./Fade";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css'; 
// import { FaTwitter } from 'react-icons/fa'

import AOS from "aos";
import "aos/dist/aos.css";

import './faq.css'


export function FAQ() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    const data = [
        {
            key: "1",
            heading: "Why should I hold my Swaga Bears NFT after the mint?",
            text:  <div><div className="fa fa-check" /> &nbsp; If you hold your Swaga Bears NFT for 14 days after the mint, you will be airdopped a special serum, that will create for you only a Galactic Swaga Bears NFT.<br /><div className="fa fa-check" /> &nbsp; Holding Swaga Bears NFT gives you access to our special events<br /><div className="fa fa-check" /> &nbsp; If you hold Swaga Bears NFT's in your wallet after minting, you will participate in the distribution of a certain % of the DAO wallet funds (Check announcements in our Discord).</div>,
        },
        {
            key: "2",
            heading: "How to get whitelisted?",
            text: "Our whitelist spots are almost filled, few more spots left. Check the Discord.",
        },
        {
            key: "3",
            heading: "What is the mint date and the exact price?",
            text: <div>We are minting on <strong>20/04 (Wednesday) at 17:00 GMT</strong> with the price of <strong>1.5 SOL</strong></div>
        },
        {
            key: "4",
            heading: "How much is the supply?",
            text: "Our supply consists 5555 unique Swaga Bear NFT's",
        },
        {
            key: "5",
            heading: "Which blockchain you are using?",
            text: "Solana Blockchain, due to the minimal gas fees, compared to the ETH. Many bluechip ETH projects are heading towards Solana.",
        }
    ];

    return (
        <div data-aos={'fade-up'} id="FAQ" className="container mt-5 bears-seciton align-center  overflow-hidden">
            {/* <Fade> */}
                <div className="container-lg">
                  <div className="text-center pt-5 in-viewport visible full-visible">
                    <h2 data-aos={'fade-up'} className="text-primary title-sizes section-title position-relative mb-4 ">
                      {/* <img src="./img/hat.png" className="img-fluid hat" alt="Hat" /> */}
                      Q<span className="middle-title">&amp;</span>A
                      {/* {console.log(flag)} */}
                    </h2>
                  </div>


                  <div className="customAccordion pt-3 ">
                      <Accordion>
                          {data.map((item, indexOf) => (
                              <Accordionitem itemData={item} key={indexOf} />
                          ))}
                      </Accordion>
                  </div>
                </div>
            {/* </Fade> */}
        </div>
    );
};

export default FAQ;