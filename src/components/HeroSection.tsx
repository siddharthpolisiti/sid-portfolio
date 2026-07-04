import { motion } from "framer-motion";
import PixelCloud from "./PixelCloud";
import Coin from "./Coin";
import PixelButton from "./PixelButton";
import profileImg from "@/assets/profile.png";

interface HeroSectionProps {
  onStartGame: () => void;
}

const HeroSection = ({ onStartGame }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen sky-gradient overflow-hidden">
      {/* Clouds */}
      <PixelCloud className="absolute top-20 left-[5%]" size="lg" delay={0} />
      <PixelCloud className="absolute top-32 right-[10%]" size="md" delay={1} />
      <PixelCloud className="absolute top-48 left-[60%]" size="sm" delay={0.5} />
      <PixelCloud className="absolute top-16 left-[35%]" size="md" delay={1.5} />

      {/* Floating Coins */}
      <Coin className="absolute top-40 left-[15%]" delay={0} />
      <Coin className="absolute top-56 right-[20%]" delay={0.3} />
      <Coin className="absolute top-64 left-[45%]" delay={0.6} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pb-32">
        {/* Title Card */}
        <motion.div
          className="bg-card pixel-border p-8 md:p-12 text-center max-w-3xl mx-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          {/* Profile Picture */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <img
              src={profileImg}
              alt="Sid Polisiti"
              className="w-32 h-32 pixel-border object-cover"
              style={{ imageRendering: "auto" }}
            />
          </motion.div>

          {/* Decorative stars */}
          <motion.div
            className="flex justify-center gap-4 mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
            <span className="text-2xl">⭐</span>
          </motion.div>

          <motion.h1
            className="font-pixel text-2xl md:text-4xl text-primary leading-relaxed mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            SID
            <br />
            POLISITI
          </motion.h1>

          <motion.div
            className="font-pixel text-sm md:text-base text-secondary mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            FOUNDER | PRODUCT LEADER
          </motion.div>

          <motion.p
            className="font-retro text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Building products from 0 → 1 → N across fintech, AI chatbots, developer platforms, smart home & hospitality IoT, warehouse systems, and experimentation-led growth
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <PixelButton onClick={onStartGame} size="lg" variant="accent">
              START GAME
            </PixelButton>
          </motion.div>

          {/* Press Start Blink */}
          <motion.p
            className="font-pixel text-xs text-muted-foreground mt-6"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            PRESS START TO BEGIN
          </motion.p>
        </motion.div>

        {/* Player indicator */}
        <motion.div
          className="absolute bottom-36 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          <div className="font-pixel text-xs text-center mb-2">PLAYER 1</div>
          <div className="text-4xl">🎮</div>
        </motion.div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-24 ground-pattern brick-pattern" />
      
      {/* Grass on top of ground */}
      <div className="absolute bottom-24 left-0 right-0 h-4 bg-secondary" />
    </section>
  );
};

export default HeroSection;
