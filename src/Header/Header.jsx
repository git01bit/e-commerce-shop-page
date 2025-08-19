import styles from "./Header.module.css";
import DesktopHeader from "./DesktopHeader/DesktopHeader.jsx";
import MobileHeader from "./MobileHeader/MobileHeader.jsx";
import { useState, useEffect } from "react";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWidth);

    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  if (width > 768) {
    return <DesktopHeader />;
  } else {
    return <MobileHeader />;
  }
}

export default Header;
