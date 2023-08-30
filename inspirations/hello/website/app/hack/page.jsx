"use client"
import React, { useEffect } from 'react'
import "./page.css";
import Script from 'next/script'
import { Input, Spacer, useInput, Grid } from "@nextui-org/react";
import * as bootstrap from "@styled-icons/bootstrap";
import * as boxiconsLogos from "@styled-icons/boxicons-logos";
import * as boxiconsRegular from "@styled-icons/boxicons-regular";
import * as boxiconsSolid from "@styled-icons/boxicons-solid";
import * as crypto from "@styled-icons/crypto";
import * as entypo from "@styled-icons/entypo";
import * as entypoSocial from "@styled-icons/entypo-social";
import * as evaiconsOutline from "@styled-icons/evaicons-outline";
import * as evaiconsSolid from "@styled-icons/evaicons-solid";
import * as evil from "@styled-icons/evil";
import * as faBrands from "@styled-icons/fa-brands";
import * as faRegular from "@styled-icons/fa-regular";
import * as faSolid from "@styled-icons/fa-solid";
import * as feather from "@styled-icons/feather";
import * as fluentUISystemFilled from "@styled-icons/fluentui-system-filled";
import * as fluentUISystemRegular from "@styled-icons/fluentui-system-regular";
import * as foundation from "@styled-icons/foundation";
import * as heroiconsOutline from "@styled-icons/heroicons-outline";
import * as heroiconsSolid from "@styled-icons/heroicons-solid";
import * as icomoon from "@styled-icons/icomoon";
import * as ioniconsSharp from "@styled-icons/ionicons-sharp";
import * as ioniconsSolid from "@styled-icons/ionicons-solid";
import * as ioniconsOutline from "@styled-icons/ionicons-outline";
import * as materialRounded from "@styled-icons/material-rounded";
import * as materialSharp from "@styled-icons/material-sharp";
import * as materialTwoTone from "@styled-icons/material-twotone";
import * as octicons from "@styled-icons/octicons";
import * as remixFill from "@styled-icons/remix-fill";
import * as remixEditor from "@styled-icons/remix-editor";
import * as remixLine from "@styled-icons/remix-line";
import * as simpleIcons from "@styled-icons/simple-icons";
import * as typicons from "@styled-icons/typicons";
import * as zondicons from "@styled-icons/zondicons";




const Hack = () => {


  useEffect(() => {

    let x, y, r, g, b = 0;

    var c = document.getElementById('canv');
    var $ = c.getContext('2d');


    var col = function (x, y, r, g, b) {
      $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      $.fillRect(x, y, 1, 1);
    }
    var R = function (x, y, t) {
      return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t)));
    }

    var G = function (x, y, t) {
      return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)));
    }

    var B = function (x, y, t) {
      return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
    }

    var t = 0;

    var run = function () {
      for (x = 0; x <= 35; x++) {
        for (y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.050;
      window.requestAnimationFrame(run);
    }

    run();













    return () => {
      console.log(window.innerHeight)
    }
  }, [])
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);





  return (
    <div className="hackIn__conatainer overflow-hidden h-screen w-screen">


      <canvas className='canvas' id="canv" width="32" height="32" />
      <div className='fixed t-0 l-0 z-50 h-screen w-screen flex hack'>

        <div className="hack__container h-auto w-full m-5 p-3
                        md:w-1/3 md:m-0 ">

          <div className="hackTittle__container h-10 w-full ">
            {/* <div className="indicator w-1/2 h-full "></div> */}

            <div className="hackTittle h-32 w-full  flex flex-row items-center ">
              <button className="btn btn-ghost flex-1 h-4 w-full">HackIn</button>
              <button className="btn btn-ghost flex-1 h-3 w-full">HackUp</button>
              {/* <h1 className="text-rose-600 flex-1 w-full h-full  text-center flex items-center justify-center">HackIn</h1> */}
              {/* <h1 className="text-rose-600 flex-1 w-full h-full text-center flex items-center justify-center ">HackUp</h1> */}

            </div>
          </div>
          <div className="flex flex-col w-full h-64 border-opacity-50 pt-7">
            <div className="grid h-full card rounded-box place-items-center px-3">
              <input type="text" placeholder="Name" className="input input-bordered  input-success w-full bg-tranparent input-sm " />



              <input type="email" placeholder="Email" className="input input-bordered w-full  input-warning input-sm " />
              <input type="password" placeholder="Password" className="input input-bordered w-full input-error  input-sm " />

            </div>
            <div className="divider">or</div>
            <div className="grid h-24 card bg-base-300 rounded-box place-items-center">
              {/* <li className=" rounded-full flex items-center justify-center h-7 w-7 ">

                <ioniconsOutline.Google className='text-white w-3 h-3' />

              </li> */}
              <h1>Metaverse</h1>

            </div>
          </div>

          <div className="action__container mt-3 w-full flex items-center space-x-4">

            
            <button className="btn flex-1 ">Back</button>
            <button className="btn btn-ghost flex-1">Create</button>
            {/* <button className="btn btn-primary">Button</button>
<button className="btn btn-secondary">Button</button>
<button className="btn btn-accent">Button</button> */}
            {/* <button className="btn btn-link">Button</button> */}

          </div>
        </div>













      </div>
      {/* <Script
        src="https://cdn.jsdelivr.net/gh/Man-from-earth25/master/hello/website/src/ux/hackUp.js"
        strategy="beforeInteractive"
      /> */}
      

{/* 

              <Input
                {...bindings}
                clearable
                shadow={false}
                onClearClick={reset}
                status={helper.color}
                color={helper.color}
                helperColor={helper.color}
                helperText={helper.text}
                type="email"
                label="Email"
                placeholder="With regex validation"
              /> */}
              {/* <Input.Password labelPlaceholder="Password" initialValue="nextui123" />
              <Spacer y={1.6} />
              <Input.Password
                labelPlaceholder="Custom icons"
                visibleIcon={<UnLockIcon fill="currentColor" />}
                hiddenIcon={<LockIcon fill="currentColor" />}
              /> */}
    </div>
  )
}

export default Hack


