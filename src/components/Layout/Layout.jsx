import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
import homeMobile from "../../assets/home/background-home-mobile.jpg";
import homeTablet from "../../assets/home/background-home-tablet.jpg";
import homeDesktop from "../../assets/home/background-home-desktop.jpg";
import destinationDesktop from "../../assets/destination/background-destination-desktop.jpg";
import destinationTablet from "../../assets/destination/background-destination-tablet.jpg";
import destinationMobile from "../../assets/destination/background-destination-mobile.jpg";
import crewDesktop from "../../assets/crew/background-crew-desktop.jpg";
import crewTablet from "../../assets/crew/background-crew-tablet.jpg";
import crewMobile from "../../assets/crew/background-crew-mobile.jpg";
import technologyDesktop from "../../assets/technology/background-technology-desktop.jpg";
import technologyTablet from "../../assets/technology/background-technology-tablet.jpg";
import technologyMobile from "../../assets/technology/background-technology-mobile.jpg";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const { pathname } = location;
  const HomeBacgroundImage =
    windowWidth < 768
      ? homeMobile
      : windowWidth < 1024
      ? homeTablet
      : homeDesktop;
  const destinationBacgroundImage =
    windowWidth < 768
      ? destinationMobile
      : windowWidth < 1024
      ? destinationTablet
      : destinationDesktop;
  const crewBacgroundImage =
    windowWidth < 768
      ? crewMobile
      : windowWidth < 1024
      ? crewTablet
      : crewDesktop;
  const technologyBacgroundImage =
    windowWidth < 768
      ? technologyMobile
      : windowWidth < 1024
      ? technologyTablet
      : technologyDesktop;
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <main
      className={styles.layout}
      style={{
        backgroundImage: `url(${
          pathname === "/"
            ? HomeBacgroundImage
            : pathname === "/destination"
            ? destinationBacgroundImage
            : pathname === "/crew"
            ? crewBacgroundImage
            : technologyBacgroundImage
        })`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center center",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header>
        <Navbar screenWidth={windowWidth} pathname={pathname} />
      </header>
      <section>
        <Outlet></Outlet>
      </section>
    </main>
  );
}
