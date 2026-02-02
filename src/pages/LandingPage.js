import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
export default function LandingPage() {
  return (
    <>
    <NavBar/>
      <section id="layanan">
        <div className="container bg-red-500">
          <div className="row mt-5">
            <div>Landing Page</div>
          </div>
        </div>
      </section>
    </>
  );
}
