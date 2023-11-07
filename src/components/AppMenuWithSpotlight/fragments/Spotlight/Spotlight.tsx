import {
  ReactNode,
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useLayoutEffect,
  useCallback
} from "react";
import useMousePosition from "./utils/useMousePosition";

interface ISpotlight {
  children: ReactNode;
  className?: string;
}

function Spotlight({ children, ...rest }: ISpotlight, forwardedRef: any) {
  const innerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [box, setBox] = useState<HTMLElement>();

  useImperativeHandle(
    forwardedRef,
    () => innerRef.current || document.createElement("div")
  );

  const containerRef = innerRef;

  const initContainer = useCallback(() => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  }, [containerRef]);

  const onMouseMove = useCallback(() => {
    if (containerRef.current && box) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
        const boxX =
          -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
        const boxY =
          -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
        box.style.setProperty("--mouse-x", `${boxX}px`);
        box.style.setProperty("--mouse-y", `${boxY}px`);
      }
    }
  }, [box, containerRef, mousePosition.x, mousePosition.y]);

  useEffect(() => {
    if (containerRef.current) {
      const childElement = containerRef.current.firstChild as HTMLElement;
      if (childElement) {
        setBox(childElement);
      }
    }
  }, [containerRef]);

  useLayoutEffect(() => {
    setTimeout(initContainer, 0);
    window.addEventListener("resize", initContainer);
    return () => {
      window.removeEventListener("resize", initContainer);
    };
  }, [initContainer]);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition, onMouseMove]);

  return (
    <div ref={containerRef} {...rest}>
      {children}
    </div>
  );
}

export default forwardRef(Spotlight);
