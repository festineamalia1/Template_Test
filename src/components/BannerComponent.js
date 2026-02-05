import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import  ImageContainer  from "../assets/images/image-container.png";

export default function BannerComponent() {
  return (
    <div className="container">
      <div className="flex flex-row py-5 item-center justify-center">
        <div className="flex flex-row gap-3">
          <div className="flex flex-col text-left justify-center text-white gap-2">
            <h1>Get More Done with whitepace</h1>
            <div>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</div>
             <button className="bg-[#4F9CF9]  w-40 rounded rounded-sm text-white text-nowrap !text-sm px-3 py-2 mt-5">Try Whitepace free&nbsp;<ArrowForwardIcon sx={{ fontSize: 14 }}/></button>
          </div>
          <div className="flex flex-col justify-center item-center">
            <img src={ImageContainer} alt="image-banner" className="object-cover h-[549px]"/>
          </div>
        </div>
      </div>
    </div>
  );
}
