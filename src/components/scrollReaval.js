import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealWrapperFromLeft = ({ children }) => {
  const containerRef = useRef();

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(containerRef.current.children, {
      duration: 1000,
      origin: "left",
      distance: "100px",
      easing: "ease-out",
      reset: true,
      mobile: true,
      delay: 200,
    });
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

const ScrollRevealWrapperFromRight = ({ children }) => {
  const containerRef = useRef();

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(containerRef.current.children, {
      duration: 1000,
      origin: "right",
      distance: "100px",
      easing: "ease-out",
      reset: true,
      mobile: true,
      delay: 200,
    });
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export { ScrollRevealWrapperFromLeft, ScrollRevealWrapperFromRight };
