import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';



const CircularProgressBar = ({ size = 60, strokeWidth = 8, progressColor = "var(--primary-color, #4A90E2)", bgColor = "#e0e0e0" }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius; // Calculate circumference locally

  // Get scroll progress (0 to 1) for the entire page
  const { scrollYProgress } = useScroll();

  // Map scrollYProgress (0-1) to stroke-dashoffset (circumference to 0).
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [circumference, 0]);

  return (
    <div
      style={{
        position: 'fixed', // Keep it in place while scrolling
        bottom: '20px',    // Position from the bottom edge
        right: '20px',      // Position from the left edge
        zIndex: 1000,      // Ensure it's above other content
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)', // Slightly stronger shadow for visibility
        backgroundColor: 'purple-400'  // Optional: a background to make it stand out
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Circle */}
        <circle
          cx={size / 2} // Use size / 2 for center
          cy={size / 2} // Use size / 2 for center
          r={radius}
          fill="none"
          stroke={'pink-400'}
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <motion.circle
          cx={size / 2} // Use size / 2 for center
          cy={size / 2} // Use size / 2 for center
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round" // Makes the ends of the stroke rounded
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotate to start from the top, dynamically using size
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset, // Animated by Framer Motion
          }}
        />
      </svg>
    </div>
  );
};


export default CircularProgressBar;