import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";

const Cursor = () => {
  const theme = useTheme();
  const [mount, setMount] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  const getCustomColor = () => {
    if (theme.theme === "dark") {
      return "#fff";
    } else if (theme.theme === "light") {
      return "#000";
    }
    return "#000";
  };

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    if (!mount) return;

    const handleMouseMove = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = (e) => {
      if (e.target.classList.contains("link")) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.classList.contains("link")) {
        setIsHovering(false);
      }
    };

    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        const smoothness = 0.5;
        
        currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * smoothness;
        currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * smoothness;

        setPosition({
          x: currentPosition.current.x,
          y: currentPosition.current.y,
        });
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mount]);

  if (!mount) return null;

  const scale = isHovering ? 1.5 : 1;
  const opacity = isHovering ? 0.5 : 1;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        backgroundColor: getCustomColor(),
        pointerEvents: "none",
        zIndex: 9999,
        transform: `translate(${position.x - 15}px, ${position.y - 15}px) scale(${scale})`,
        opacity: opacity,
        transition: "transform 0.1s ease-out, opacity 0.2s ease-out",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default Cursor;

// Made with Bob
