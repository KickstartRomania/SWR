"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

interface StickerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  initialRotate?: number;
}

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right" | null;

export function Sticker({
  src,
  alt,
  width = 120,
  height = 120,
  className = "",
  initialRotate = 0,
}: StickerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [grabbedCorner, setGrabbedCorner] = useState<Corner>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track pointer position relative to the sticker center
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });
  const [bendAngle, setBendAngle] = useState({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate click position relative to the element (0 to 1)
    const relativeX = (e.clientX - rect.left) / rect.width;
    const relativeY = (e.clientY - rect.top) / rect.height;
    
    setOrigin({
      x: `${relativeX * 100}%`,
      y: `${relativeY * 100}%`
    });

    // Determine which corner is closest to the grab point
    if (relativeX < 0.5 && relativeY < 0.5) setGrabbedCorner("top-left");
    else if (relativeX >= 0.5 && relativeY < 0.5) setGrabbedCorner("top-right");
    else if (relativeX < 0.5 && relativeY >= 0.5) setGrabbedCorner("bottom-left");
    else setGrabbedCorner("bottom-right");

    // Calculate how much to bend based on where they grabbed it
    const rotateX = (0.5 - relativeY) * 70; // Up to 35 degrees
    const rotateY = (relativeX - 0.5) * 70; // Up to 35 degrees

    setBendAngle({ x: rotateX, y: rotateY });
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setBendAngle({ x: 0, y: 0 });
    setOrigin({ x: "50%", y: "50%" });
    setGrabbedCorner(null);
  };

  // Fold size in pixels
  const foldSize = 45;

  // Generate clip-path for the main image to cut off the grabbed corner
  let clipPath = "none";
  if (isDragging && grabbedCorner) {
    switch (grabbedCorner) {
      case "top-left":
        clipPath = `polygon(${foldSize}px 0, 100% 0, 100% 100%, 0 100%, 0 ${foldSize}px)`;
        break;
      case "top-right":
        clipPath = `polygon(0 0, calc(100% - ${foldSize}px) 0, 100% ${foldSize}px, 100% 100%, 0 100%)`;
        break;
      case "bottom-right":
        clipPath = `polygon(0 0, 100% 0, 100% calc(100% - ${foldSize}px), calc(100% - ${foldSize}px) 100%, 0 100%)`;
        break;
      case "bottom-left":
        clipPath = `polygon(0 0, 100% 0, 100% 100%, ${foldSize}px 100%, 0 calc(100% - ${foldSize}px))`;
        break;
    }
  }

  return (
    <motion.div
      ref={containerRef}
      drag
      dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      onPointerDown={handlePointerDown}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        zIndex: isDragging ? 50 : 10,
        perspective: 1200,
      }}
      initial={{ rotate: initialRotate }}
      animate={{ 
        rotate: isDragging ? 0 : initialRotate,
        scale: isDragging ? 1 : 1,
      }}
      whileHover={{ scale: 1.05 }}
      className={`absolute cursor-grab active:cursor-grabbing touch-none ${className}`}
    >
      <motion.div
        animate={{
          rotateX: isDragging ? bendAngle.x : 0,
          rotateY: isDragging ? bendAngle.y : 0,
          scale: isDragging ? 1.15 : 1,
          filter: isDragging 
            ? "drop-shadow(20px 30px 20px rgba(0,0,0,0.4)) drop-shadow(0px 0px 2px rgba(255,255,255,1)) drop-shadow(0px 0px 4px rgba(255,255,255,1))" 
            : "drop-shadow(2px 4px 6px rgba(0,0,0,0.2)) drop-shadow(0px 0px 2px rgba(255,255,255,1)) drop-shadow(0px 0px 4px rgba(255,255,255,1))",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25
        }}
        className="relative"
        style={{ 
          width, 
          height,
          transformOrigin: `${origin.x} ${origin.y}`,
        }}
      >
        {/* Main Image with dynamic clip-path to cut the corner */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: isDragging && grabbedCorner ? clipPath : undefined }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain pointer-events-none select-none"
            draggable={false}
          />
        </div>
        
        {/* The Folded Flap */}
        {isDragging && grabbedCorner && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute bg-gradient-to-br from-white to-gray-200 shadow-[-2px_2px_5px_rgba(0,0,0,0.2)]"
            style={{
              width: foldSize,
              height: foldSize,
              ...(grabbedCorner === "top-left" && {
                top: 0,
                left: 0,
                clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
              }),
              ...(grabbedCorner === "top-right" && {
                top: 0,
                right: 0,
                clipPath: "polygon(0 0, 0 100%, 100% 100%)",
                boxShadow: "-2px 2px 5px rgba(0,0,0,0.3)",
              }),
              ...(grabbedCorner === "bottom-right" && {
                bottom: 0,
                right: 0,
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
                boxShadow: "-2px -2px 5px rgba(0,0,0,0.3)",
              }),
              ...(grabbedCorner === "bottom-left" && {
                bottom: 0,
                left: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                boxShadow: "2px -2px 5px rgba(0,0,0,0.3)",
              }),
            }}
          >
            {/* Inner shadow to make the fold look realistic */}
            <div className="absolute inset-0 bg-gradient-to-tl from-black/5 to-transparent" />
          </motion.div>
        )}

        {/* Wrinkle/Reflection Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-tr from-transparent via-white/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isDragging ? 1 : 0,
          }}
          style={{
            backgroundPosition: isDragging ? `${parseFloat(origin.x)}% ${parseFloat(origin.y)}%` : "0% 0%",
            backgroundSize: "250% 250%",
            mixBlendMode: "overlay",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
