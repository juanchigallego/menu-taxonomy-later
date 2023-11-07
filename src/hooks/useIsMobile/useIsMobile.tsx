import { useState, useEffect } from "react";
import tokens from "@nimbus-ds/tokens/dist/js/tokens";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= Number(tokens.breakpoint.md.value.replace("px", ""))
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth <=
          Number(tokens.breakpoint.md.value.replace("px", ""))
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
