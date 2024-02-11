import { useState, useEffect } from "react";

const useSectionIntersection = (sections) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const target = document.querySelector(
        section.slug.includes("/#")
          ? `[id="${section.slug.slice(2)}"]`
          : section.slug
      );

      if (target) {
        sectionObserver.observe(target);
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [sections]);

  return activeSection;
};

export default useSectionIntersection;
