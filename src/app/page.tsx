"use client";
import React from "react";
import Image from "next/image";
import Projects from "./components/Projects";
import About from "./components/About";
import Links from "./Links";
import { motion } from "framer-motion";

export default function Home() {
  const [page, setPage] = React.useState("projects");

  const handleTabChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const pageName = event.currentTarget.dataset.tab;
    if (pageName) {
      setPage(pageName);
    }
  };

  const renderComponent = () => {
    switch (page) {
      case "projects":
        return <Projects />;
      case "about":
        return <About />;
      case "links":
        return <Links />;
      default:
        return null;
    }
  };

  return (
    <main className="flex flex-row items-center justify-center md:p-10">
      <div className="w-full md:w-2/5 h-full md:h-screen">
        <div className="w-full h-auto md:h-3/5">
          <Image src="/Background.jpg" width={528} height={50} alt="header" />
        </div>
        <div className="flex justify-between">
          <div className="profile ml-10 border-2 border-black -translate-y-11 md:-translate-y-20">
            <Image
              src="/Profile.jpg"
              width={100}
              height={100}
              className="profile-image"
              alt="Profile"
            />
          </div>
          <div className="-translate-y-5">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className="bg-orange-600 hover:bg-orange-700 h-10 text-white font-bold py-2 px-4 mr-7 rounded-full"
          >
            Follow
          </motion.button>
          </div>
        </div>
        <div className="flex flex-col ml-7 text-left -translate-y-10">
          <strong className="text-2xl">Subhrodeep Basu</strong>
          <p className="text-slate-600">@HelloToTheWorld</p>
        </div>
        <div className="ml-7">
          <p>Builder.Enthusiast.Problem Solver</p>
          <p>I like building interesting things 🚀</p>
          <p>FullStack Developer. IEMK&apos;23</p>
        </div>
        <div className="flex justify-around mt-10 mb-5">
          <button
            className={`border-b-4 ${page==="projects"? "border-orange-600": "border-backG"} hover:border-orange-600`}
            data-tab="projects"
            onClick={handleTabChange}
          >
            Projects
          </button>
          <button
            className={`border-b-4 ${page==="about"? "border-orange-600": "border-backG"} hover:border-orange-600`}
            data-tab="about"
            onClick={handleTabChange}
          >
            About
          </button>
          <button
            className={`border-b-4 ${page==="links"? "border-orange-600": "border-backG"} hover:border-orange-600`}
            data-tab="links"
            onClick={handleTabChange}
          >
            Links
          </button>
          <button className={`border-b-4 border-backG hover:border-orange-600`}>
            Contact
          </button>
        </div>
        {renderComponent()}
      </div>
    </main>
  );
}
