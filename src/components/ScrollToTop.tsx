import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls the entire document to the top whenever the path changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "instant" prevents flickers; use "smooth" for animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;