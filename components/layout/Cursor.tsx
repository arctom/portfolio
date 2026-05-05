"use client";

import { useState, useEffect } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check for touch device
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const updateHover = (e: MouseEvent) => {
      const target = e.target;
      setHover(target instanceof Element && target.closest(".link") !== null);
    };

    const onMouseEnter = updateHover;
    const onMouseLeave = updateHover;

    const onMouseOut = () => setVisible(false);
    const onMouseOver = () => setVisible(true);

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [visible]);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden tablet:block"
      style={{
        transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
        transition: hover
          ? "transform 0.08s ease-out"
          : "transform 0.15s ease-out",
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className={`rounded-full mix-blend-difference bg-white transition-all duration-200 ${
          hover ? "w-10 h-10 opacity-50" : "w-6 h-6 opacity-100"
        }`}
      />
    </div>
  );
}
