import { motion } from "framer-motion";
import WorldCard from "./WorldCard";
import PixelCloud from "./PixelCloud";

const worlds = [
  {
    worldNumber: 1,
    title: "VENTURE: YUKI",
    subtitle: "yukihq.com",
    icon: "🌟",
  },
  {
    worldNumber: 2,
    title: "AI DEVELOPER PLATFORM",
    subtitle: "N26 (BOSS LEVEL)",
    icon: "🧠",
  },
  {
    worldNumber: 3,
    title: "GROWTH & EXPERIMENTATION",
    subtitle: "N26",
    icon: "🚀",
  },
  {
    worldNumber: 4,
    title: "SMART HOME & HOSPITALITY",
    subtitle: "Octo Telematics",
    icon: "🏠",
  },
  {
    worldNumber: 5,
    title: "AI CHATBOTS & KYC",
    subtitle: "Bank of America",
    icon: "🤖",
  },
  {
    worldNumber: 6,
    title: "WAREHOUSE SYSTEMS",
    subtitle: "Prospecta Technologies",
    icon: "🏭",
  },
  {
    worldNumber: 7,
    title: "E-COMMERCE & TELECOM",
    subtitle: "CGI",
    icon: "💻",
  },
  {
    worldNumber: 8,
    title: "EDUCATION",
    subtitle: "Engineering & MBA",
    icon: "🎓",
  },
  {
    worldNumber: 9,
    title: "POWER-UPS",
    subtitle: "Passions & Skills",
    icon: "❤️",
  },
];

interface WorldMapSectionProps {
  onWorldSelect: (worldNumber: number) => void;
}

const WorldMapSection = ({ onWorldSelect }: WorldMapSectionProps) => {
  return (
    <section className="relative py-20 px-4 sky-gradient min-h-screen">
      {/* Decorative Clouds */}
      <PixelCloud className="absolute top-10 left-[5%] opacity-60" size="md" delay={0} />
      <PixelCloud className="absolute top-40 right-[8%] opacity-60" size="sm" delay={1} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-pixel text-xl md:text-2xl text-foreground mb-4">
            SELECT YOUR WORLD
          </h2>
          <p className="font-retro text-2xl text-muted-foreground">
            Choose a world to explore my journey
          </p>
        </motion.div>

        {/* World Grid */}
        <div className="grid gap-6 md:gap-8">
          {worlds.map((world, index) => (
            <motion.div
              key={world.worldNumber}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <WorldCard
                {...world}
                isUnlocked={true}
                onClick={() => onWorldSelect(world.worldNumber)}
              />
            </motion.div>
          ))}
        </div>

        {/* Lives indicator */}
        <motion.div
          className="flex justify-center gap-2 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="font-pixel text-sm">WORLDS COMPLETED:</span>
          {[...Array(9)].map((_, i) => (
            <span key={i} className="text-xl">⭐</span>
          ))}
        </motion.div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-16 ground-pattern brick-pattern" />
      <div className="absolute bottom-16 left-0 right-0 h-3 bg-secondary" />
    </section>
  );
};

export default WorldMapSection;
