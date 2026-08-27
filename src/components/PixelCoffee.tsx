import { motion } from "framer-motion";

interface PixelCoffeeProps {
  className?: string;
  delay?: number;
}

// Vapour wisps rising off the cup, staggered so the steam never pulses in
// unison. Each drifts up, curls sideways and fades. They start at the rim so
// the steam reads as coming off the surface rather than floating above it.
const wisps = [
  { x: 5, drift: -1.2, duration: 2.6, offset: 0 },
  { x: 8, drift: 1.2, duration: 3.2, offset: 0.9 },
  { x: 11, drift: -0.8, duration: 2.9, offset: 1.7 },
];

const PixelCoffee = ({ className = "", delay = 0 }: PixelCoffeeProps) => {
  return (
    <span className={`inline-block w-10 h-11 align-middle ${className}`}>
      <svg viewBox="0 0 20 22" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
        {/* Steam */}
        {wisps.map((w, i) => (
          <motion.g
            key={i}
            animate={{
              y: [0, -2, -3.5],
              x: [0, w.drift, w.drift * 1.5],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: w.duration,
              repeat: Infinity,
              ease: "easeOut",
              delay: delay + w.offset,
            }}
          >
            <rect x={w.x} y={6} width={1} height={2} fill="#FFFFFF" />
            <rect x={w.x + 1} y={4} width={1} height={2} fill="#FFFFFF" />
            <rect x={w.x} y={2} width={1} height={2} fill="#FFFFFF" />
          </motion.g>
        ))}

        {/* Handle — drawn first so the body overlaps its inner edge */}
        <rect x={12} y={11} width={5} height={2} fill="#FFFFFF" />
        <rect x={15} y={13} width={2} height={2} fill="#C9BFA8" />
        <rect x={12} y={15} width={5} height={2} fill="#C9BFA8" />

        {/* Cup rim + coffee surface */}
        <rect x={2} y={8} width={12} height={1} fill="#FFF7D6" />
        <rect x={3} y={9} width={10} height={1} fill="#3B2314" />

        {/* Cup body */}
        <rect x={3} y={10} width={10} height={9} fill="#FFFFFF" />
        <rect x={3} y={10} width={2} height={9} fill="#FFFDF5" />
        <rect x={11} y={10} width={2} height={9} fill="#C9BFA8" />
        <rect x={3} y={19} width={10} height={1} fill="#A89C82" />
      </svg>
    </span>
  );
};

export default PixelCoffee;
