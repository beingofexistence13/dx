"use client";

import "./Applebar.css";
import Image from "next/image";
import Link from "next/link";
import { Spinner } from "@styled-icons/fa-solid/Spinner/Spinner";
import { Person } from "@styled-icons/bootstrap/Person/Person";
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

const Applebar = () => {
  return (
    <nav className="applebar__container">
      <Link href="/homeSpace">
        <li className="items__container items__icon__container">
          <ioniconsOutline.Home size="20" title="Profile" />
        </li>
      </Link>

      <Link href="/studySpace">
        <li className="items__container items__icon__container">
          <ioniconsOutline.Book size="20" title="Profile" />
        </li>
      </Link>

      <Link href="/gameSpace">
        <li className="items__container items__icon__container">
          <ioniconsOutline.GameController size="20" title="Profile" />
        </li>
      </Link>

      <Link href="/visualSpace">
        <li className="items__container items__icon__container">
          <ioniconsOutline.Diamond size="20" title="Profile" />
        </li>
      </Link>

      <Link href="/mySpace">
        <li className="items__container items__icon__container">
          <ioniconsOutline.Snow size="20" title="Profile" />
        </li>
      </Link>

      <Link href="/workSpace">
        <li className="items__container items__icon__container">
          <ioniconsOutline.Easel size="20" title="Profile" />
        </li>
      </Link>

      <Link href="/liveSpace">
        <li className="items__container items__icon__container">
          <ioniconsOutline.People size="20" title="Profile" />
        </li>
      </Link>

      <Link href="/joy">
        <li className="items__container items__image__container">
          <Image
            src="/insideOut/joy.jpeg"
            width={25}
            height={25}
            alt="Logo Main"
          />
        </li>
      </Link>

      <Link href="/sadness">
        <li className="items__container items__image__container">
          <Image
            src="/insideOut/sadness.jpeg"
            width={25}
            height={25}
            alt="Logo Main"
          />
        </li>
      </Link>

      <Link href="/anger">
        <li className="items__container items__image__container">
          <Image
            src="/insideOut/anger.jpeg"
            width={25}
            height={25}
            alt="Logo Main"
          />
        </li>
      </Link>

      <Link href="/fear">
        <li className="items__container items__image__container">
          <Image
            src="/insideOut/fear.jpeg"
            width={25}
            height={25}
            alt="Logo Main"
          />
        </li>
      </Link>

      <Link href="/disgust">
        <li className="items__container items__image__container">
          <Image
            src="/insideOut/disgust.jpeg"
            width={25}
            height={25}
            alt="Logo Main"
          />
        </li>
      </Link>

      <Link href="/goal">
        <li className="items__container items__image__container">
          <Image
            src="/insideOut/goal.jpeg"
            width={25}
            height={25}
            alt="Logo Main"
          />
        </li>
      </Link>

      <Link href="/coreMemory">
        <li className="items__container items__image__container">
          <Image
            src="/insideOut/coreMemory.jpeg"
            width={25}
            height={25}
            alt="Logo Main"
          />
        </li>
      </Link>
    </nav>
  );
};

export default Applebar;
