import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/BannerComponent";
export default function LandingPage() {
  return (
    <>
      <NavBar />
      <section id="banner" className="bg-[#043873]">
        <Banner />
      </section>
    </>
  );
}
