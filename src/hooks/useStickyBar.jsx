// src/hooks/useStickyBar.js
import { useEffect, useRef } from "react";
import Sticky from "sticky-js";

const useStickyBar = () => {
  const stickyBarRef = useRef(null);

  useEffect(() => {
    if (stickyBarRef.current) {
      new Sticky("[data-sticky]");
    }
  }, []);

  return { stickyBarRef };
};

export default useStickyBar;
