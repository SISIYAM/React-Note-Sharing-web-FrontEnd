// src/hooks/useStickyHeader.js
import { useEffect, useRef } from "react";

const useStickyHeader = () => {
  const stickyRef = useRef(null);
  const stickySpaceRef = useRef(null);

  useEffect(() => {
    const stickyNav = stickyRef.current;
    const stickySpace = stickySpaceRef.current;

    if (stickyNav && stickySpace) {
      const handleScroll = () => {
        const scTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scTop >= 400) {
          stickySpace.classList.add("active");
          stickySpace.style.height = `${stickyNav.offsetHeight}px`;
          stickyNav.classList.add("navbar-sticky-on");
        } else {
          stickySpace.classList.remove("active");
          stickySpace.style.height = "0px";
          stickyNav.classList.remove("navbar-sticky-on");
        }
      };

      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return { stickyRef, stickySpaceRef };
};

export default useStickyHeader;
