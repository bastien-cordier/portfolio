import React from "react";
import Typed from "react-typed";
import {
  ScrollRevealWrapperFromLeft,
  ScrollRevealWrapperFromRight,
} from "../components/scrollReaval.js";
import "../styles/main.scss";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Intro() {
  return (
    <div>
      <section
        className="h-screen bg-white text-neutral-800 dark:bg-neutral-900 dark:text-white flex items-center"
        id="intro"
      >
        <div className="container">
          <div className="flex md:justify-around flex-col md:flex-row items-center">
            <div className="w-full md:w-auto">
              <ScrollRevealWrapperFromLeft>
                <div className="profile-pic mb-14 md:hidden">
                  <img
                    src="/profile.png"
                    alt="Profile pic"
                    className="mx-auto w-40"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl mb-5">
                  Hi, I'm Bastien{" "}
                  <span className="shake" role="img" aria-label="Waving hand">
                    👋🏼
                  </span>
                </h1>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  I'm a{" "}
                  <Typed
                    className="jobTyping text-[#B470E8]"
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
                <p className="text-xl">📍 based in Paris, France.</p>
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
