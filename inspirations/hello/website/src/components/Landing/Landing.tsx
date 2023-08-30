"use client";
import React, { useState } from 'react'
import "./Landing.css"
import Image from "next/image";
import Link from "next/link";
import * as evaiconsOutline from "@styled-icons/evaicons-outline";
import * as evaiconsSolid from "@styled-icons/evaicons-solid";
import * as ioniconsOutline from "@styled-icons/ionicons-outline";
import * as ioniconsSolid from "@styled-icons/ionicons-solid";







const Landing = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [footerAccordingOpen, setfooterAccordingOpen] = useState(null);
  const [theme, setTheme] = useState(false);
  const menuToggle = () => setMenuOpen(!menuOpen);
  const footerAccordingToggle = (i: any) => {
    if (footerAccordingToggle == i){
      return setfooterAccordingOpen(null);
    }
    setfooterAccordingOpen(i);
  }
  const themeToggle = () => setTheme(!theme);

  return (
    <>

      <nav className="flex z-10 px-5 w-full landingNavbar__container justify-between">
        <li className="flex min-w-min lg:w-[200px]  justify-start items-center space-x-1 h-full">
          <div className="flex justify-center items-center w-6 h-6 rounded-sm menu__toggler connect"
            onClick={menuToggle}>
            {menuOpen ? <evaiconsOutline.CloseOutline className='text-[#fff8f8] hover:text-white' title="Menu" /> : <ioniconsOutline.Menu className='text-[#fff8f8] hover:text-white' size="17" title="Menu" />}
          </div>
          <div className="logo__main__container">
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              width={18}
              height={18}
              priority
            />
          </div>
          <div className="logo__banner__container">
            <h5 className="font-bold text-md text-slate-400 hover:text-sky-400">Hello</h5>
          </div>
        </li>
        <li className=" hidden lg:flex lg:flex-1 justify-center items-center">
          <ul className="hidden flex-row justify-start items-center space-x-4 h-full md:flex">
            <Link href="/docs">
              <li className="productStatusViewer__container">
                <h1 className="font-mono antialiased not-italic font-medium text-slate-400  hover:text-white">Docs</h1>
              </li>
            </Link>
            <Link href="/features">
              <li className="productStatusViewer__container">
                <h1 className="font-mono antialiased not-italic font-medium text-slate-400 hover:text-white">Features</h1>
              </li>
            </Link>
            <Link href="/influencers">
              <li className="productStatusViewer__container">
                <h1 className="font-mono antialiased not-italic font-medium text-slate-400 hover:text-white">Influencers</h1>
              </li>
            </Link>
            <Link href="/changelog">
              <li className="productStatusViewer__container">
                <h1 className="font-mono antialiased not-italic font-medium text-slate-400 hover:text-white">Changelog</h1>
              </li>
            </Link>
            <Link href="/intregations">
              <li className="productStatusViewer__container">
                <h1 className="font-mono antialiased not-italic font-medium text-slate-400  hover:text-white">Intregations</h1>
              </li>
            </Link>
            <Link href="/company">
              <li className="productStatusViewer__container">
                <h1 className="font-mono antialiased not-italic font-medium text-slate-400  hover:text-white">Company</h1>
              </li>
            </Link>
          </ul>
        </li>
        <li className="flex min-w-max w-auto lg:w-[250px] justify-end items-center space-x-2 h-full ">

          <div className="hidden flex-1 justify-end items-center w-full h-full scrollLogin__container lg:flex border-r-zinc-50">
            <Link href="/hack">

              <h1 className="px-2 py-1 text-xs text-center text-[#fff8f8] hover:text-white rounded-sm connect">Connect Wallet</h1>
            </ Link>
          </div>
          <hr className="connect w-[1.5px] h-5 lg:inline hidden" />
          <div className="flex justify-center items-center w-7 h-7 rounded-full menu__toggler connect"
            onClick={themeToggle}>
            <ioniconsOutline.Search className='w-3 h-3 text-[#fff8f8] hover:text-white' title="Search" />
          </div>
          <div className="flex justify-center items-center w-7 h-7 rounded-full menu__toggler connect"
            onClick={themeToggle}>
            <ioniconsOutline.Infinite className='w-3 h-3 text-[#fff8f8] hover:text-white' title="Multiverse" />
          </div>

          <div className="flex justify-center items-center w-7 h-7 rounded-full menu__toggler connect"
            onClick={menuToggle}>
            {menuOpen ? <svg className="w-3 h-3 text-[#fff8f8] hover:text-white fill-current swap-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg> : <svg className="w-3 h-3 text-[#fff8f8] hover:text-white fill-current swap-off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>}
          </div>

        </li>
      </nav>




















      <div className="hero min-w-full max-w-[1200px] min-h-[100vh] ">
        <div className="flex relative flex-col justify-center items-center w-full min-h-screen bg-black header">
          <div className=" text-center animated-tittle flex items-center justify-center min-h-max xs:flex-col  p-5">

            <h1 className="font-serif text-5xl lg:text-[5rem]
            subpixel-antialiased font-black text-transparent bg-clip-text not-itali bg-gradient-to-r from-fuchsia-500 to-cyan-500">Multiversal.</h1>

            <h1 className="font-serif text-5xl lg:text-[5rem]  subpixel-antialiased font-black text-transparent bg-clip-text not-itali bg-gradient-to-r from-amber-500 to-pink-500 ">Social.</h1>
            <h1 className="font-serif text-5xl lg:text-[5rem] subpixel-antialiased font-black text-transparent bg-clip-text not-itali bg-gradient-to-r from-teal-400 to-yellow-200 ">Media.</h1>
          </div>

          <p className='w-1/2 text-center text-slate-400'>Hello is a Social with Network with the power of Web3 and new Ai like ChatGpt3 Dall-E and this Network is growing really fast for your Love and Support!!!</p>
          <div className="flex flex-row justify-center items-center mt-5 heroButtons">

            <div className="border  hover:text-black min-w-fit h-10 rounded-md text-[#fff8f8] p-2 text-center mr-2.5">Start Journey</div>
            <div className="p-2 h-10 text-center text-black bg-white rounded-md hover:bg-transparent hover:text-white hover:border min-w-fit">Just View Already</div>
          </div>
          <div className="absolute bottom-0 left-0 w-full text-center heroTrust">
            <h5 className="tracking-widest text-slate-400">All of your personal Data is Protected and your Safity is our top priority</h5>
          </div>
        </div>








        {/* Footer */}
        {/* <footer className="flex flex-col items-center justify-center px-3 py-1 w-full min-h-screen  bg-[#070606] header mt-[100px] ">
          <nav className="footer__marketting w-full space-y-1">
            <div className="footer__logo w-full flex items-center justify-center p-5 flex-col ">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={60}
                height={60}
                priority
              />
              <h5 className="w-auto text-center text-cyan-600 hover:text-cyan-300  hover:bg-[rgb(20,20,20)] rounded-md p-3">Status: All systems normal</h5>
            </div>
            <div onClick={() => footerAccordingToggle(i) } className={`footer__marketting__lists flex flex-col items-center justify-between px-5 py-3 ${footerAccordingOpen == i ? 'border-[#0e0d0d] border-[1px]' : 'border-t-[#0e0d0d] border-t-[1px]'}   hover:bg-[#0f0f0f] hover:border-none rounded-md h-auto `}>
              <div className="footer__marketting__lists__header w-full flex flex-row items-center justify-between ">

                <h3 className={`w-full text-[#fff8f8] hover:text-white`}>Product</h3>
                <ioniconsOutline.ChevronDown className='w-3 h-3 text-[#fff8f8] hover:text-white' title="More" />

              </div>
              <div className={`footer__marketting__lists__main flex flex-col  w-full ${footerAccordingOpen === 'active' ? 'flex' : 'hidden'}`}>
                <Link className="text-[#c7c7c7] hover:text-white " href={'infrastucture'}>Infrastucture</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'preview'}>Preview</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'edge-fuctions'}>Edge Fuctions</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'aienstinejs'}>Aienstine.js</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'cli-api'}>Cli & Api</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'enterprice'}>Enterprice</Link>

              </div>

            </div>
            <div onClick={footerAccordingToggle} className={`footer__marketting__lists flex flex-col items-center justify-between px-5 py-3 ${footerAccordingOpen ? 'border-[#0e0d0d] border-[1px]' : 'border-t-[#0e0d0d] border-t-[1px]'}   hover:bg-[#0f0f0f] hover:border-none rounded-md h-auto `}>
              <div className="footer__marketting__lists__header w-full flex flex-row items-center justify-between ">

                <h3 className={`w-full text-[#fff8f8] hover:text-white`}>Product</h3>
                <ioniconsOutline.ChevronDown className='w-3 h-3 text-[#fff8f8] hover:text-white' title="More" />

              </div>
              <div className={`footer__marketting__lists__main flex flex-col  w-full ${footerAccordingOpen ? 'flex' : 'hidden'}`}>
                <Link className="text-[#c7c7c7] hover:text-white " href={'infrastucture'}>Infrastucture</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'preview'}>Preview</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'edge-fuctions'}>Edge Fuctions</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'aienstinejs'}>Aienstine.js</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'cli-api'}>Cli & Api</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'enterprice'}>Enterprice</Link>

              </div>


            </div>
            <div onClick={footerAccordingToggle} className={`footer__marketting__lists flex flex-col items-center justify-between px-5 py-3 ${footerAccordingOpen ? 'border-[#0e0d0d] border-[1px]' : 'border-t-[#0e0d0d] border-t-[1px]'}   hover:bg-[#0f0f0f] hover:border-none rounded-md h-auto `}>
              <div className="footer__marketting__lists__header w-full flex flex-row items-center justify-between ">

                <h3 className={`w-full text-[#fff8f8] hover:text-white`}>Product</h3>
                <ioniconsOutline.ChevronDown className='w-3 h-3 text-[#fff8f8] hover:text-white' title="More" />

              </div>
              <div className={`footer__marketting__lists__main flex flex-col  w-full ${footerAccordingOpen ? 'flex' : 'hidden'}`}>
                <Link className="text-[#c7c7c7] hover:text-white " href={'infrastucture'}>Infrastucture</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'preview'}>Preview</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'edge-fuctions'}>Edge Fuctions</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'aienstinejs'}>Aienstine.js</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'cli-api'}>Cli & Api</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'enterprice'}>Enterprice</Link>

              </div>


            </div>
            <div onClick={footerAccordingToggle} className={`footer__marketting__lists flex flex-col items-center justify-between px-5 py-3 ${footerAccordingOpen ? 'border-[#0e0d0d] border-[1px]' : 'border-t-[#0e0d0d] border-t-[1px]'}   hover:bg-[#0f0f0f] hover:border-none rounded-md h-auto `}>
              <div className="footer__marketting__lists__header w-full flex flex-row items-center justify-between ">

                <h3 className={`w-full text-[#fff8f8] hover:text-white`}>Product</h3>
                <ioniconsOutline.ChevronDown className='w-3 h-3 text-[#fff8f8] hover:text-white' title="More" />

              </div>
              <div className={`footer__marketting__lists__main flex flex-col  w-full ${footerAccordingOpen ? 'flex' : 'hidden'}`}>
                <Link className="text-[#c7c7c7] hover:text-white " href={'infrastucture'}>Infrastucture</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'preview'}>Preview</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'edge-fuctions'}>Edge Fuctions</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'aienstinejs'}>Aienstine.js</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'cli-api'}>Cli & Api</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'enterprice'}>Enterprice</Link>

              </div>


            </div>
            <div onClick={footerAccordingToggle} className={`footer__marketting__lists flex flex-col items-center justify-between px-5 py-3 ${footerAccordingOpen ? 'border-[#0e0d0d] border-[1px]' : 'border-t-[#0e0d0d] border-t-[1px]'}   hover:bg-[#0f0f0f] hover:border-none rounded-md h-auto `}>
              <div className="footer__marketting__lists__header w-full flex flex-row items-center justify-between ">

                <h3 className={`w-full text-[#fff8f8] hover:text-white`}>Product</h3>
                <ioniconsOutline.ChevronDown className='w-3 h-3 text-[#fff8f8] hover:text-white' title="More" />

              </div>
              <div className={`footer__marketting__lists__main flex flex-col  w-full ${footerAccordingOpen ? 'flex' : 'hidden'}`}>
                <Link className="text-[#c7c7c7] hover:text-white " href={'infrastucture'}>Infrastucture</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'preview'}>Preview</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'edge-fuctions'}>Edge Fuctions</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'aienstinejs'}>Aienstine.js</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'cli-api'}>Cli & Api</Link>
                <Link className="text-[#c7c7c7] hover:text-white " href={'enterprice'}>Enterprice</Link>

              </div>

            </div>

          </nav>
          <section className="flex flex-row items-center justify-between w-full ">
            <div className="copyright-container ">

              <h3 className="text-center text-[#b8b8b8] hover:text-white ">© 2023 Hello  Inc.</h3>
              <div className="social-madias rounded-md hover:bg-[#131313] p-2 space-x-1">


                <ioniconsSolid.LogoGithub className='w-5 h-5  text-[#b8b8b8] hover:text-white' title="Github" />
                <ioniconsSolid.LogoYoutube className='w-5 h-5  text-[#b8b8b8] hover:text-white' title="Youtube" />
                <ioniconsSolid.LogoFacebook className='w-5 h-5  text-[#b8b8b8] hover:text-white' title="Facebook" />
                <ioniconsSolid.LogoInstagram className='w-5 h-5  text-[#b8b8b8] hover:text-white' title="Instragam" />
                <ioniconsSolid.LogoWhatsapp className='w-5 h-5  text-[#b8b8b8] hover:text-white' title="Whatsapp" />
              </div>

            </div>
            <div className="theme-toggler rounded-2xl border-2 border-[#2c2c2c] flex justify-center items-center space-x-2 ">
              <div className="moon__container h-[30px] w-[30px] rounded-full hover:bg-[#303030] flex justify-center items-center ">

                <ioniconsOutline.Moon className='w-4 h-4  text-[#cccccc] hover:text-[#ffffff]   ' title="Dark" />

              </div>
              <div className="sunny__container h-[30px] w-[30px] rounded-full hover:bg-[#303030] flex justify-center items-center ">

                <ioniconsOutline.Sunny className='w-4 h-4  text-[#cccccc] hover:text-[#ffffff]  ' title="Light" />

              </div>
              <div className="desktop__container h-[30px] w-[30px] rounded-full hover:bg-[#303030] flex justify-center items-center ">

                <ioniconsOutline.Desktop className='w-4 h-4  text-[#cccccc] hover:text-[#ffffff] ' title="Device" />

              </div>
            </div>
          </section>
        </footer> */}

        {/* HomeSpace */}
        <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-100 header">
          <h1 className="text-[#fff8f8] hover:text-white">HomeSpace</h1>
        </section>
        {/* StudySpace */}
        <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-200 header">
          <h1 className="text-[#fff8f8] hover:text-white">StudySpace</h1>
        </section>
        {/* GameSpace */}
        <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-300 header">
          <h1 className="text-[#fff8f8] hover:text-white">GameSpace</h1>
        </section>
        {/* MySpace */}
        <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-400 header">
          <h1 className="text-[#fff8f8] hover:text-white">MySpace</h1>
        </section>
        {/* VisualSpace */}
        <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-500 header">
          <h1 className="text-[#fff8f8] hover:text-white">VisualSpace</h1>
        </section>
        {/* WorkSpace */}
        <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-600 header">
          <h1 className="text-[#fff8f8] hover:text-white">WorkSpace</h1>
        </section>
        {/* LiveSpace */}
        <section className="flex relative flex-col justify-center items-center w-full min-h-screen bg-rose-700 header">
          <h1 className="text-[#fff8f8] hover:text-white">LiveSpace</h1>
        </section>



      </div>
      {/* <video src="./hello.mp4" controls autoPlay></video> */}






    </>
  )
}
export default Landing