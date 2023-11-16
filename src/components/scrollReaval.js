import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealWrapper = ({ children }) => {
  const containerRef = useRef();

  useEffect(() => {
    const sr = ScrollReveal();

    // Configurer l'animation
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

export default ScrollRevealWrapper;
