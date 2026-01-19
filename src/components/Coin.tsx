import { motion } from "framer-motion";

interface CoinProps {
  className?: string;
  delay?: number;
}

const Coin = ({ className = "", delay = 0 }: CoinProps) => {
  return (
    <motion.div
      className={`w-8 h-8 ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 1, repeat: Infinity, delay }}
    >
      <svg viewBox="0 0 16 16" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
        {/* Coin body */}
        <rect x="4" y="0" width="8" height="2" fill="#FFD700" />
        <rect x="2" y="2" width="12" height="2" fill="#FFD700" />
        <rect x="2" y="4" width="12" height="8" fill="#FFEC8B" />
        <rect x="2" y="12" width="12" height="2" fill="#FFD700" />
        <rect x="4" y="14" width="8" height="2" fill="#FFD700" />
        {/* Shine effect */}
        <rect x="4" y="4" width="2" height="6" fill="#FFFACD" />
        {/* Shadow side */}
        <rect x="10" y="4" width="2" height="6" fill="#DAA520" />
      </svg>
    </motion.div>
  );
};

export default Coin;
