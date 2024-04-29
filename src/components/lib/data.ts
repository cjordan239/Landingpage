import { AiOutlineCreditCard } from "react-icons/ai";
import { TbSeo } from "react-icons/tb";
import { PiVirtualRealityBold } from "react-icons/pi";
import { MdOutlineMobileFriendly } from "react-icons/md";
import React from "react";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
  {
    name: "Contact us",
    hash: "#contactus",
  },
] as const

export const HomeBannerProduct = [
  {
    icon: React.createElement(AiOutlineCreditCard),
    title: "Web Application",
    description: "lorem ipsum is body.",
    backgroundColor: "bg-cyan-300",
  },
  {
    icon: React.createElement(TbSeo),
    title: "SEO",
    description: "lorem ipsum is body.",
    backgroundColor: "bg-green-300"
  },
  {
    icon: React.createElement(PiVirtualRealityBold),
    title: "AR/VR Solution",
    description: "lorem ipsum is body.",
    backgroundColor: "bg-blue-200"
  },
  {
    icon: React.createElement(MdOutlineMobileFriendly ),
    title: "Mobile Application",
    description: "lorem ipsum is body.",
    backgroundColor: "bg-amber-950"
  },
] as const;
