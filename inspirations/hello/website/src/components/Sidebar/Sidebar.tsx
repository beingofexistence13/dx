"use client";

import "./Sidebar.css";
import { demos } from '../../../lib/sidebar';
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
import React, { useState } from "react";



const Sidebar = () => {

  // const [isOpen,setIsOpen] = useState(false);


  return (
    <nav className="sidebar__container sm:top-[55px] md:top-[60px] ">


      <div className="sidebar__top__container">
        <ul className="main__container">

          {/* <div className="space-y-10 text-white">
        {demos.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                {section.name}
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.name}
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        {item.name}
                      </div>

                      {item.description ? (
                        <div className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div> */}


          <Link href="/home">
            <li className="items__container items__icon__container">
              <ioniconsOutline.Albums size="20" title="Profile" />
            </li>
          </Link>
          <Link href="/homeSpace/groups">
            <li className="items__container items__icon__container">
              <bootstrap.People size="20" title="Profile" />
            </li>
          </Link>
          <Link href="/homeSpace/shorts">
            <li className="items__container items__icon__container">
              <boxiconsLogos.Tiktok size="20" title="Profile" />
            </li>
          </Link>
          <Link href="/homeSpace/pages">
            <li className="items__container items__icon__container">
              <ioniconsOutline.Flag size="20" title="Profile" />
            </li>
          </Link>
          <Link href="/homeSpace/watch">
            <li className="items__container items__icon__container">
              <ioniconsOutline.Tv size="20" title="Profile" />
            </li>
          </Link>
          <Link href="/homeSpace/layers">
            <li className="items__container items__icon__container">
              <ioniconsOutline.Layers size="20" title="Profile" />
            </li>
          </Link>

        </ul>

        <ul className="secondary__container">
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
        </ul>



      </div>


      <div className="sidebarScrollbar__container">
        <div className="sidebar__scrollbar">
          <ioniconsOutline.ChevronUp size="20" title="Profile" />
        </div>
        <div className="sidebar__scrollbar">
          <ioniconsOutline.ChevronDown size="20" title="Profile" />
        </div>

      </div>


      <div className="gap"></div>

      <div className="sidebar__bottom__container">
        <Link href="/helps">
          <li className="items__container items__icon__container">
            <ioniconsOutline.Help size="20" title="Profile" />
          </li>
        </Link>

        <Link href="/tools">
          <li className="items__container items__icon__container">
            <ioniconsOutline.Apps size="20" title="Profile" />
          </li>
        </Link>
        <Link href="/settings">
          <li className="items__container items__icon__container">
            <ioniconsOutline.Settings size="20" title="Profile" />
          </li>
        </Link>
      </div>



    </nav>
  );
};

export default Sidebar;




