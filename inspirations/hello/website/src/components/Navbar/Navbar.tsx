"use client";

import "./Navbar.css";
import Image from "next/image";

// Will have to do about these icons stuff really soon!!!
import { Person } from "@styled-icons/bootstrap/Person/Person";
import { NotificationsNone } from "@styled-icons/material/NotificationsNone/NotificationsNone";
import { Add } from "@styled-icons/ionicons-outline/Add/Add";
import * as bootstrap from "@styled-icons/bootstrap";
import * as boxiconsRegular from "@styled-icons/boxicons-regular";
import * as ioniconsSolid from "@styled-icons/ionicons-solid";
import * as ioniconsOutline from "@styled-icons/ionicons-outline";
import * as remixLine from "@styled-icons/remix-line";
import * as simpleIcons from "@styled-icons/simple-icons";
import * as zondicons from "@styled-icons/zondicons";
import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar-glassmorphisum flex flex-row text-gray-50 2xs:h-[45px] xs:h-[50px] sm:h-[55px] md:h-[60px] w-full fixed top-0 left-0 px-[10px] py-[5px]  ">
      <ul className="left_content flex flex-row justify-start items-center h-full xs:w-[185px] sm:flex-1 w-[300px] space-x-1">
        <li className="navbar_list icon__container border-none p-[5px] glasshover rounded-md  ">
          <ioniconsOutline.Menu size="17" title="Menu" />
        </li>
        <li className="logo p-[5px] glasshover rounded-md">
          <div className="logo__main__container">
            <Image src="/logo.png" width={20} height={20} alt="Logo Main" />
          </div>
        </li>
        {/* Will work on this tomorrow!!! */}
        <li className="navbar_list address_list blockchain_address_nav">
          <Image src="/wallet/metamask.jpg" alt="e" className="blockchain_address_wallet" width={15} height={15} />
          <h6 className="blockchain_address">GMpgjjhgjghjhg</h6>
          <div className="blockchain_address_network" />
        </li>
        <li className="navbar_list balance_list blockchain_balance_nav">
          <Image src="/blockchain/etherium.jpg" alt="e" className="blockchain_provider_name" width={15} height={15} />
          <h6 className="blockchain_balance">0.000016Eth</h6>
          <ioniconsSolid.ChevronDown size="16" title="Dropdown" />
        </li>
      </ul>
      <ul className="center__content h-full hidden lg:flex items-center justify-center lg:flex-auto ">
        <li className="search__container h-[32.5px] ">
          <boxiconsRegular.SearchAlt size="17" title="Search" />
          <input
            type="text"
            name="Search"
            id="search"
            placeholder="Search for joy!!!"
          />
          <div className="mic__container">
            <span className="name hidden">Mic Input</span>
            <bootstrap.Mic size="17" title="Mic Input" />
          </div>
          <div className="file__container">
            <span className="name hidden">File Input</span>
            <bootstrap.Collection size="17" title="File Input" />
          </div>
        </li>
      </ul>
      <ul className="right_content 2xs:flex-1 xs:flex-1 h-full flex flex-row justify-end items-center 2xs:space-x-2 xs:space-x-1 space-x-1 w-[300px] ">
        <li className="navbar_list add__container p-[5px] icon__container glasshover rounded-full 2xs: hidden xs:hidden sm:hidden md:flex ">
          <span className="name hidden">Add</span>
          <Add size="17" title="Add" />
        </li>
        <li className="navbar_list add__container p-[5px] icon__container glasshover rounded-full 2xs:hidden xs:hidden sm:hidden md:flex ">
          <span className="name hidden">Hello-Mode</span>
          <ioniconsOutline.Brush size="17" title="Add" />
        </li>
        <li className="navbar_list chat__container p-[5px] icon__container glasshover rounded-full 2xs:hidden xs:hidden sm:hidden md:flex ">
          <span className="name hidden">Chat</span>
          <remixLine.Messenger size="16" title="Chat" />
        </li>
        <li className="navbar_list extra p-[5px] icon__container glasshover rounded-full  2xs:flex xs:flex sm:flex  md:hidden">
          <span className="name hidden">Extra</span>
          <zondicons.CheveronDown size="17" title="Extra" />
        </li>

        <li className="navbar_list add__container p-[5px] icon__container glasshover rounded-full flex 2xs:hidden xs:hidden">
          <span className="name hidden">Multiverse</span>
          <ioniconsSolid.Infinite size="16" title="Add" />
        </li>
        <li className="navbar_list search__container p-[5px] icon__container glasshover rounded-full flex 2xs:hidden xs:hidden">
          <span className="name hidden">Friday</span>
          <simpleIcons.Googleassistant size="17" title="Search" />
        </li>
        <li className="navbar_list search__container p-[5px] icon__container glasshover rounded-full hidden 2xs:flex xs:flex sm:flex">
          <span className="name hidden">Search</span>
          <boxiconsRegular.SearchAlt size="17" title="Search" />
        </li>
        <li className="navbar_list notification__container p-[5px] icon__container glasshover rounded-full">
          <span className="name hidden">Notification</span>
          <NotificationsNone size="17" title="Notifications" />
        </li>
        <li className="navbar_list rightSidebar__container p-[5px] icon__container glasshover rounded-full flex 2xs:hidden xs:hidden">
          <span className="name hidden">Right SideBar</span>
          <bootstrap.LayoutSidebarReverse size="17" title="Right Sidebar" />
        </li>
        <li className="navbar_list profile__container p-[5px] icon__container glasshover rounded-full flex items-center justify-center ">
          <span className="name hidden">Profile</span>
          <Person size="17" title="Profile" />
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;












