import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './team.css'

function Team() {
  useEffect(() => {
    AOS.init({duration: 1500});
    AOS.refresh();
  }, []);

  return (
    <section id="Team"  className="my-md-5 pt-md-5 overflow-hidden">
				<div  className="container-lg pt-5">
					<div  className="text-center in-viewport pt-5 visible full-visible">
						<h2 data-aos={'fade-up'} className="text-primary section-title position-relative mb-4 text-uppercase">
							{/* <img src="./images/vectors/glasses.png"  className="img-fluid glasses" alt="Glasses" /> */}
							Team
						</h2>
					</div>

					<div  className="row justify-content-center mt-5 pt-3">
						<div data-aos={'fade-right'} className="col-xl-6 col-md-8 col-10 in-viewport visible">
							<div className="team-member team-style-1 mb-5 slide-in-left">
								<div className="team-member-image image-top-left">
									<img src="./images/team-bears/maximus.png" alt="Maximus" className="astro-levitation visible" />
								</div>

								<div className="team-member-info py-3 px-2 px-sm-3">
									<h4 className="text-primary text-uppercase">
										Maximus
									</h4>
									<span className="team-member-position">
										Creative Director
									</span>

									<p>
										True leader, workaholic, born for great victories. 
										A little bit selfish, but extremely good at managing teams.
									</p>
									<p>
										Currently running several different successful businesses.
										He loves to play video games in his free time.
									</p>
								</div>									
							</div>
						</div>

						<div data-aos={'fade-left'} className="col-xl-6 col-md-8 col-10 in-viewport visible">
							<div className="team-member team-style-2 mb-5 slide-in-right">
								<div  className="team-member-info py-3 px-2 px-sm-3">
									<h4  className="text-primary text-uppercase">
										Kevin Pumpliano 
									</h4>
									<span  className="team-member-position">
										Product Design
									</span>

									<p>
										Master of details, more than 9 years of experience in graphics and custom designs. He  loves to take pictures of hot chicks on the best islands in the world.
									</p>
								</div>

								<div  className="team-member-image image-top-right">
									<img src="./images/team-bears/kevin.png" alt="Kevin Pumpliano"  className="astro-levitation fast" data-xblocker="passed"  />
								</div>								
							</div>
						</div>

						<div data-aos={'fade-right'} className="col-xl-6 col-md-8 col-10 in-viewport visible">
							<div className="team-member team-style-1 mb-5 slide-in-left">
								<div  className="team-member-info py-3 px-2 px-sm-3">
									<h4  className="text-primary text-uppercase">
										Vox
									</h4>
									<span  className="team-member-position">
										Marketing director
									</span>

									<p>
										Good marketing makes the project look smart. 
										Great marketing makes the customer feel smart.
									</p>
									<p>
										He is Guru of marketing and will be 
										responsible to make the best marketing 
										strategy for the project. 
									</p>
								</div>
								<div  className="team-member-image image-top-right">
									<img src="./images/team-bears/vox.png" alt="Vox"  className="astro-levitation" data-xblocker="passed"  />
								</div>								
							</div>
						</div>

						<div data-aos={'fade-left'} className="col-xl-6 col-md-8 col-10 in-viewport visible">
							<div className="team-member team-style-2 mb-5 slide-in-right">
								<div  className="team-member-image image-middle-left">
									<img src="./images/team-bears/will.png" alt="Will Breezly"  className="astro-levitation slow" data-xblocker="passed"  />
								</div>		

								<div  className="team-member-info py-3 px-2 px-sm-3">
									<h4  className="text-primary text-uppercase">
										Will Breezly
									</h4>
									<span  className="team-member-position">
										Community and marketing
									</span>

									<p>
										NFTs master and the most extrovert creature that exists.
									</p>

									<p>
										He will make sure that everyone understands what we are doing and will be responsible to answer every question. Real bitcoin lover.
									</p>
								</div>						
							</div>
						</div>

						<div data-aos={'fade-right'} className="col-xl-6 col-md-8 col-10 in-viewport visible">
							<div className="team-member team-style-1 mb-5 slide-in-left">
								<div  className="team-member-image image-top-left">
									<img src="./images/team-bears/cj-jeffrey.png" alt="CJ Jeffrey"  className="astro-levitation" data-xblocker="passed"  />
								</div>

								<div  className="team-member-info py-3 px-2 px-sm-3">
									<h4  className="text-primary text-uppercase">
										CJ Jeffrey
									</h4>
									<span  className="team-member-position">
										Platform development and smart contract 
									</span>

									<p>
										Genius when it comes to coding and technical issues, a real hacker.
									</p>
									<p>
										He worked with some other successful projects on the 
										blockchain in his background.
									</p>
								</div>									
							</div>
						</div>

						<div data-aos={'fade-left'} className="col-xl-6 col-md-8 col-10 in-viewport visible">
							<div className="team-member team-style-2 mb-5 slide-in-right">
								<div  className="team-member-info py-3 px-2 px-sm-3">
									<h4  className="text-primary text-uppercase">
										Buggzy
									</h4>
									<span  className="team-member-position">
										Main advisor and investor
									</span>

									<p>
										He knows only one thing, how to generate and multiply money. Technically he is a nerd, but who cares, he is RICH.
									</p>
								</div>

								<div  className="team-member-image image-top-right">
									<img src="./images/team-bears/buggzy.png" alt="Buggzy"  className="astro-levitation slow" data-xblocker="passed"  />
								</div>								
							</div>
						</div>

						<div data-aos={'fade-right'} className="col-xl-6 col-md-8 col-10 in-viewport visible">
							<div className="team-member team-style-1 mb-5 slide-in-left">
								<div  className="team-member-info py-3 px-2 px-sm-3">
									<h4  className="text-primary text-uppercase">
										Joe Bearson
									</h4>
									<span  className="team-member-position">
										Project developer and crypto technical analyst
									</span>

									<p>
										Concentration is his special power, not only when it's hot, 
										but also through the winter hibernation period when 
										all the bears sleep!
									</p>
									<p>
										Professional crypto trader with experience in sales, management.
									</p>
								</div>
								<div  className="team-member-image image-top-right">
									<img src="./images/team-bears/joe.png" alt="Joe Bearson"  className="astro-levitation" data-xblocker="passed"  />
								</div>		
							</div>
						</div>

						<div data-aos={'fade-left'} className="col-xl-6 col-md-8 col-10 in-viewport visible">
							<div className="team-member team-style-2 mb-5 slide-in-right">
								<div  className="team-member-image image-middle-left">
									<img src="./images/team-bears/ben.png" alt="Ben Ursa"  className="astro-levitation slow" data-xblocker="passed"  />
								</div>		

								<div  className="team-member-info py-3 px-2 px-sm-3">
									<h4  className="text-primary text-uppercase">
										Ben Ursa
									</h4>
									<span  className="team-member-position">
										Crypto professional and sales
									</span>

									<p>
										With years of experience in the crypto market and sales, 
										he will be the most active person in our crypto talks and yes... he can sell the pen. 
									</p>
								</div>						
							</div>
						</div>

						
					</div>
				</div>
			</section>
  );
}

export default Team;
