import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import HeaderIcon from "./HeaderIcon";


const Header = () => {
  return (
    <>
    <div className="sticky top-0 z-50 bg-white flex  items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src={"https://links.papareact.com/5me"}
          width={40}
          height={40}
        ></Image>

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600"></MagnifyingGlassIcon>
          <input
            type="text"
            className="hidden md:inline-flex  ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* header center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-2 md:space-x-6">
          <HeaderIcon  Icon={HomeIcon}></HeaderIcon>
          <HeaderIcon Icon={FlagIcon}></HeaderIcon>
          <HeaderIcon Icon={PlayIcon}></HeaderIcon>
          <HeaderIcon Icon={ShoppingCartIcon}></HeaderIcon>
          <HeaderIcon Icon={UserGroupIcon}></HeaderIcon>
        </div>
      </div>
      {/* header right */}
      <div className="flex items-center sm:space-x-2 justify-end">
      {/* profile picture comes here */}
      <p className="font-semibold whitespace-nowrap pr-3">Tejash Agrawal</p>
      <Squares2X2Icon className="icon"/>
      <ChatBubbleOvalLeftEllipsisIcon className="icon"/>
      <BellIcon className="icon"/>
      <ChevronDownIcon className="icon"/>
      
      
      



      </div>
      </div>
    </>
  );
};

export default Header;
