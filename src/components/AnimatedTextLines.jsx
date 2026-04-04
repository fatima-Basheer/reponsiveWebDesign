import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export const AnimatedTextLines = ({ text, className, lineGap = "" }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  return (
    <div className={className} ref={containerRef}>
      {lines.map((line, index) => (
        <span
          key={index}
          ref={(el) => (lineRefs.current[index] = el)}
          className={`block leading-relaxed tracking-wide text-pretty ${lineGap}`}
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTextLines;
