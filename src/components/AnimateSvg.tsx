import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimateSvgProps {
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  className?: string;
  path: string;
  strokeColor?: string;
  strokeWidth?: number;
  strokeLinecap?: "round" | "butt" | "square";
  animationDuration?: number;
  animationDelay?: number;
  animationBounce?: number;
  reverseAnimation?: boolean;
  enableHoverAnimation?: boolean;
  hoverAnimationType?: "redraw" | "pulse";
  hoverStrokeColor?: string;
}

const AnimateSvg: React.FC<AnimateSvgProps> = ({
  width = "100%",
  height = "100%",
  viewBox = "0 0 100 100",
  className = "",
  path,
  strokeColor = "currentColor",
  strokeWidth = 2,
  strokeLinecap = "round",
  animationDuration = 1,
  animationDelay = 0,
  animationBounce = 0,
  reverseAnimation = false,
  enableHoverAnimation = false,
  hoverAnimationType = "redraw",
  hoverStrokeColor,
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const length = pathRef.current.getTotalLength();
    
    // Initial setup
    gsap.set(pathRef.current, {
      strokeDasharray: length,
      strokeDashoffset: reverseAnimation ? 0 : length,
    });

    const animation = gsap.to(pathRef.current, {
      strokeDashoffset: reverseAnimation ? length : 0,
      duration: animationDuration,
      delay: animationDelay,
      ease: animationBounce > 0 ? `back.out(${animationBounce})` : "power2.inOut",
    });

    // Hover Animation
    if (enableHoverAnimation && svgRef.current) {
      const handleEnter = () => {
        if (hoverAnimationType === "redraw") {
          gsap.fromTo(pathRef.current, 
            { strokeDashoffset: length },
            { strokeDashoffset: 0, duration: animationDuration * 0.8, ease: "power2.inOut" }
          );
        }
        if (hoverStrokeColor) {
          gsap.to(pathRef.current, { stroke: hoverStrokeColor, duration: 0.3 });
        }
      };

      const handleLeave = () => {
        if (hoverStrokeColor) {
          gsap.to(pathRef.current, { stroke: strokeColor, duration: 0.3 });
        }
      };

      svgRef.current.addEventListener("mouseenter", handleEnter);
      svgRef.current.addEventListener("mouseleave", handleLeave);

      return () => {
        svgRef.current?.removeEventListener("mouseenter", handleEnter);
        svgRef.current?.removeEventListener("mouseleave", handleLeave);
        animation.kill();
      };
    }
  }, [path, animationDuration, animationDelay, animationBounce, reverseAnimation, enableHoverAnimation, hoverAnimationType, hoverStrokeColor, strokeColor]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      preserveAspectRatio="none"
      style={{ overflow: "visible" }}
    >
      <path
        ref={pathRef}
        d={path}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
      />
    </svg>
  );
};

export default AnimateSvg;
