"use client";

import "./Bottombar.css";
import Image from "next/image";
import { Spinner } from "@styled-icons/fa-solid/Spinner/Spinner";
// import { ioniconsOutline.Bulb } from "@styled-icons/bootstrap/Person/Person";
import { NotificationsNone } from "@styled-icons/material/NotificationsNone/NotificationsNone";
import { LayoutSidebar } from "@styled-icons/bootstrap/LayoutSidebar/LayoutSidebar";
import { Add } from "@styled-icons/ionicons-outline/Add/Add";
import { Chat } from "@styled-icons/bootstrap/Chat/Chat";
import { MenuOutline } from "@styled-icons/evaicons-outline/MenuOutline/MenuOutline";
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
import React from "react";









const Bottombar = () => {
  return (
    <nav className="bottombar__container py-2">


      <li className="items__container">
        <ioniconsOutline.Bulb size="20" title="Profile" />
        <h6>Idea</h6>
      </li>
      <li className="items__container">
        <ioniconsOutline.Bus size="20" title="Profile" />
        <h6>Road</h6>
      </li>
      <li className="items__container">
        <ioniconsOutline.Cafe size="20" title="Profile" />
        <h6>Programer</h6>
      </li>
      <li className="items__container">
        <ioniconsOutline.Boat size="20" title="Profile" />
        <h6>Sea</h6>
      </li>

      <li className="items__container">
        <ioniconsOutline.Flame size="20" title="Profile" />
        <h6>Fire</h6>
      </li>
    </nav>


  )
}

export default Bottombar