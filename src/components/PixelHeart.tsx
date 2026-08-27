import { motion } from "framer-motion";

interface PixelHeartProps {
  className?: string;
  delay?: number;
}

// Same 20x22 viewBox as PixelCoffee so the two icons line up at identical
// widths without per-icon size tweaking.
const PixelHeart = ({ className = "", delay = 0 }: PixelHeartProps) => {
  return (
    <motion.span
      className={`inline-block w-10 h-11 align-middle ${className}`}
      // lub-DUB, not a sine wave: two quick beats then a rest. An evenly
      // pulsing heart reads as a loading spinner rather than a heartbeat.
      animate={{ scale: [1, 1.18, 1, 1.12, 1] }}
      transition={{
        duration: 1.4,
        times: [0, 0.12, 0.24, 0.36, 1],
        repeat: Infinity,
        delay,
      }}
    >
      <svg viewBox="0 0 20 22" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
        {/* Body */}
        <rect x={4} y={4} width={4} height={2} fill="#E5384A" />
        <rect x={12} y={4} width={4} height={2} fill="#E5384A" />
        <rect x={2} y={6} width={16} height={4} fill="#E5384A" />
        <rect x={4} y={10} width={12} height={2} fill="#E5384A" />
        <rect x={6} y={12} width={8} height={2} fill="#E5384A" />
        <rect x={8} y={14} width={4} height={2} fill="#E5384A" />

        {/* Shine — top-left, matching Coin's highlight placement */}
        <rect x={4} y={6} width={2} height={2} fill="#FF8A94" />
        <rect x={6} y={4} width={2} height={2} fill="#FF8A94" />

        {/* Shadow — bottom-right */}
        <rect x={14} y={8} width={4} height={2} fill="#A81E2E" />
        <rect x={12} y={10} width={4} height={2} fill="#A81E2E" />
        <rect x={10} y={12} width={4} height={2} fill="#A81E2E" />
        <rect x={8} y={14} width={4} height={2} fill="#A81E2E" />
      </svg>
    </motion.span>
  );
};

export default PixelHeart;
