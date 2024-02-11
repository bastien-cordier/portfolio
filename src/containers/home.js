import React from "react";
import Typed from "react-typed";
import {
  ScrollRevealWrapperFromLeft,
  ScrollRevealWrapperFromRight,
} from "../components/scrollReaval.js";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Intro() {
  return (
    <div>
      <section
        className="h-screen bg-white text-black dark:bg-black dark:text-white flex items-center overflow-x-hidden"
        id="intro"
      >
        <div className="container">
          <div className="flex md:justify-around flex-col md:flex-row items-center">
            <div className="w-full md:max-w-lg">
              <ScrollRevealWrapperFromLeft>
                <div className="mb-14 md:hidden">
                  <img
                    src="/profile.png"
                    alt="Profile pic"
                    className="mx-auto w-64"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl mb-5">
                  Hi, I'm Bastien{" "}
                  <span className="shake" role="img" aria-label="Waving hand">
                    👋🏼
                  </span>
                </h1>
                <h3 className="text-xl sm:text-3xl">
                  I'm a{" "}
                  <Typed
                    className="text-purple dark:text-yellow"
                    strings={[
                      "Web Developer.",
                      "FrontEnd Developer.",
                      "WordPress Developer.",
                    ]}
                    typeSpeed={60}
                    backSpeed={40}
                    loop
                  />
                </h3>
                <div className="mt-5 flex">
                  <a
                    href="https://github.com/bastien-cordier"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="icon" />
                  </a>
                  <a
                    href="https://fr.linkedin.com/in/bastien-cordier-03a070151"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn className="icon" />
                  </a>
                  <BiLogoGmail className="icon" />
                </div>
              </ScrollRevealWrapperFromLeft>
            </div>
            <div className="hidden md:block">
              <ScrollRevealWrapperFromRight>
                <div className="profile-pic">
                  <img src="/profile.png" alt="Profile pic" className="w-72" />
                </div>
              </ScrollRevealWrapperFromRight>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
