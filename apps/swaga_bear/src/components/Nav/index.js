import React from 'react';
import "bootstrap/dist/js/bootstrap";
import "./nav.css"
import './btn.css'

function Navigation() {

    return (
      <header id='Navigation' className="header fixed-top">
				<nav className="navbar navbar-expand-lg navbar-dark">
				  	<a className="navbar-brand" href="#">
				  		<img src="./svg/logo.svg" alt="Swage Bears Logo" className="d-none d-sm-inline mx-3" height="46" />
				  		<img src="./svg/logo-responsive.svg" alt="Swaga Bears Logo" className="d-sm-none mx-2" />
				  	</a>
				  	
            <button className="navbar-toggler mx-2" type="button" data-bs-toggle={"collapse"}data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    	<span className="navbar-toggler-icon"></span>
				  	</button>


            <div className='navbar-collapse'>
				  	  <div className="collapse navbar-collapse nav-pos" id="navbarSupportedContent">
                <div className="container-fluid">
                  <div className="d-flex flex-row-reverse text-uppercase"> 
                    {/* <div className="col-2"></div> */}
                    {/* <div className="col-sm-10"> */}
                      {/* <span className="pull-right" > */}
                        <ul className="navbar-nav ml-auto mr-xl-2 " >
                          <li className="m-auto ">
                              <a className="nav-link text-white" href="#Mint">
                                <strong>Mint</strong>
                              </a>
                            </li>
                            <li className="m-auto ">
                              <a className="nav-link text-white" href="#About">About</a>
                            </li>
                            <li className=" m-auto">
                              <a className="nav-link text-white" href="#Roadmap">Roadmap</a>
                            </li>
                            <li className=" m-auto">
                              <a className="nav-link text-white" href="#Team">Team</a>
                            </li>
                            <li className="m-auto ">
                              <a className="nav-link text-white mright-2" href="#FAQ">FAQ</a>
                            </li>
                            <li className="m-auto text-center">
                              <button className='nav-link btn2 btn-primary text-center px-4 py-2 mx-3 text-white' style={{fontSize: '18px',textOverflow: 'initial'}}>Wallet Connect</button>
                            </li>
                            
                        </ul>
                      {/* </div> */}
                      {/* </span> */}
                      </div>
                  </div>
                </div>
                
              </div>
				</nav>
			</header>
        );
}

export default Navigation;