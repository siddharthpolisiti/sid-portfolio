import { motion } from "framer-motion";

interface WorldCardProps {
  worldNumber: number;
  title: string;
  subtitle: string;
  icon: string;
  isUnlocked?: boolean;
  onClick?: () => void;
}

const worldColors: Record<number, string> = {
  1: "bg-primary",
  2: "bg-blue-500",
  3: "bg-secondary",
  4: "bg-purple-600",
  5: "bg-pink-500",
  6: "bg-accent",
  7: "bg-red-500",
};

const WorldCard = ({
  worldNumber,
  title,
  subtitle,
  icon,
  isUnlocked = true,
  onClick,
}: WorldCardProps) => {
  return (
    <motion.button
      className={`relative w-full p-4 pixel-border bg-card text-card-foreground ${
        isUnlocked ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
      }`}
      onClick={isUnlocked ? onClick : undefined}
      whileHover={isUnlocked ? { scale: 1.02, y: -4 } : {}}
      whileTap={isUnlocked ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* World number flag */}
      <div
        className={`absolute -top-3 -left-2 ${worldColors[worldNumber]} px-3 py-1 pixel-border-sm`}
      >
        <span className="font-pixel text-xs text-primary-foreground">
          WORLD {worldNumber}
        </span>
      </div>

      <div className="flex items-center gap-4 mt-4">
        {/* Icon */}
        <div className="text-4xl">{icon}</div>

        {/* Content */}
        <div className="text-left flex-1">
          <h3 className="font-pixel text-sm leading-relaxed">{title}</h3>
          <p className="font-retro text-lg text-muted-foreground mt-1">{subtitle}</p>
        </div>

        {/* Arrow indicator */}
        {isUnlocked && (
          <motion.span
            className="font-pixel text-xl text-accent"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ▶
          </motion.span>
        )}
      </div>

      {/* Lock overlay */}
      {!isUnlocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/50">
          <span className="text-4xl">🔒</span>
        </div>
      )}
    </motion.button>
  );
};

export default WorldCard;
