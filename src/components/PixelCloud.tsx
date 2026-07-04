import { motion } from "framer-motion";

interface PixelCloudProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  delay?: number;
}

const PixelCloud = ({ className = "", size = "md", delay = 0 }: PixelCloudProps) => {
  const sizeClasses = {
    sm: "w-16 h-10",
    md: "w-24 h-14",
    lg: "w-32 h-20",
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      animate={{ x: [0, 10, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay }}
    >
      <svg viewBox="0 0 64 40" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
        {/* Cloud shape with pixel blocks */}
        <rect x="16" y="24" width="32" height="8" fill="white" />
        <rect x="8" y="16" width="48" height="8" fill="white" />
        <rect x="16" y="8" width="8" height="8" fill="white" />
        <rect x="32" y="8" width="16" height="8" fill="white" />
        {/* Shading */}
        <rect x="8" y="24" width="8" height="8" fill="#e0e0e0" />
        <rect x="48" y="16" width="8" height="8" fill="#e0e0e0" />
      </svg>
    </motion.div>
  );
};

export default PixelCloud;
