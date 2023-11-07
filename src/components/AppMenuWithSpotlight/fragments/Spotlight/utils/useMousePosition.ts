import { useState, useEffect } from "react";

interface MousePositionResult {
  x: number;
  y: number;
}

export default function useMousePosition(): MousePositionResult {
  const [mousePosition, setMousePosition] = useState<MousePositionResult>({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return mousePosition;
}
