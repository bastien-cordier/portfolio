import React from "react";
import Typed from "react-typed";
import ScrollRevealWrapper from "./components/scrollReaval.js";

export default function Home() {
  return (
    <div>
      <section
        className="h-[90vh] bg-white text-neutral-800 dark:bg-neutral-800 dark:text-white flex items-center"
        id="about-me"
      >
        <div className="container">
          <ScrollRevealWrapper>
            <h1 className="text-5xl mb-5">
              Hi{" "}
              <span className="shake" role="img" aria-label="Waving hand">
                👋🏼
              </span>
            </h1>
            <h2 className="text-3xl">My name is Bastien.</h2>
            <h3 className="text-2xl sm:text-3xl">
              I'm a{" "}
              <Typed
                className="jobTyping text-purple-500"
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
          </ScrollRevealWrapper>
        </div>
      </section>
    </div>
  );
}
