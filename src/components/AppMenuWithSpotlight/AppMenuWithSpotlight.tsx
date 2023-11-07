import { ReactNode, useState } from "react";
import { Menu } from "@nimbus-ds/patterns";
import { Spotlight } from "./fragments";

interface MenuWithSpotlightProps {
  children: ReactNode;
}

function MenuWithSpotlight({ children }: MenuWithSpotlightProps): JSX.Element {
  const [hover, setHover] = useState(false);

  return (
    <Menu>
      <Spotlight className="spotlight">
        <div
          className="spotlight-bg"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className="spotlight-border"
            style={{
              opacity: hover ? 1 : 0,
              WebkitMaskImage: `radial-gradient(50% 100px at var(--mouse-x) var(--mouse-y), black 30%, transparent)`
            }}
          />
          {children}
        </div>
      </Spotlight>
    </Menu>
  );
}

export default MenuWithSpotlight;
