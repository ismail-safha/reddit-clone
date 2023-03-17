import Image from "next/image";
import React from "react";

import {
  ChevronDown,
  Home,
  Search,
  SparklesOutline,
  GlobeOutline,
  VideoCameraOutline,
  ChatOutline,
  BellOutline,
  PlusOutline,
  SpeakerphoneOutline,
  Menu,
  XOutline,
} from "heroicons-react";
import { ChevronDownIcon, HomeIcon } from "@heroicons/react/24/solid";

import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className=" static top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          src="/reddit-favicon.png"
          alt=""
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className=" mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      {/* search box */}
      <form className="form flex flex-1 items-center space-x-2 border rounded-sm bg-gray-100 px-3 py-1  z-50 ml-14 mb:hidden lg:ml-0">
        <Search className="w-6 h-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none w-full mb:ml-4 "
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit"></button>
      </form>
      <div className="  mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesOutline className="icon" />
        <GlobeOutline className="icon" />
        <VideoCameraOutline className="icon" />
        <hr className="h-10 border border-gray-100 dark:border-gray-800" />
        <ChatOutline className="icon" />
        <BellOutline className="icon" />
        <PlusOutline className="icon" />
        <SpeakerphoneOutline className="icon" />
      </div>
      {/* mobile */}
      <div className="ml-5 flex items-center lg:hidden">
        <Menu className="icon w-8 " />
      </div>
      {/* sign in / sign out button */}

      {session ? (
        <div
          onClick={() => signOut()}
          className="cursor-pointer hidden items-center space-x-2 border border-gray-100 p-2 lg:flex"
        >
          <div className=" relative h-5 w-5 flex-shrink-0 p-3 bg-gray-100 rounded-md">
            <Image
              src="https://links.papareact.com/23l"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>

          <div className="flex-1 text-xs ">
            <p className="truncate">{session.user?.name}</p>
            <p className=" text-gray-400">1 Karma</p>
          </div>

          <ChevronDown className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="cursor-pointer hidden items-center space-x-2 border border-gray-100 p-2 lg:flex"
        >
          <div className=" relative h-5 w-5 flex-shrink-0 p-3 bg-gray-100 rounded-md">
            <Image
              src="https://links.papareact.com/23l"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <p className=" text-gray-400">Sign In</p>
        </div>
      )}
    </header>
  );
};

export default Header;
