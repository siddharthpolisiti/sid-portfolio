import { motion } from "framer-motion";
import Coin from "./Coin";

interface Impact {
  metric: string;
  value: string;
}

interface CaseStudyProps {
  worldNumber: number;
  title: string;
  company: string;
  role: string;
  context: string;
  problem: string[];
  roleScope: string[];
  whatBuilt: string[];
  impact: Impact[];
  learning: string;
  icon: string;
}

const worldBgColors: Record<number, string> = {
  1: "from-primary/20 to-primary/5",
  2: "from-blue-500/20 to-blue-500/5",
  3: "from-secondary/20 to-secondary/5",
  4: "from-purple-600/20 to-purple-600/5",
  5: "from-pink-500/20 to-pink-500/5",
  6: "from-cyan-500/20 to-cyan-500/5",
  7: "from-accent/20 to-accent/5",
  8: "from-red-500/20 to-red-500/5",
  9: "from-orange-500/20 to-orange-500/5",
};

const worldBorderColors: Record<number, string> = {
  1: "border-primary",
  2: "border-blue-500",
  3: "border-secondary",
  4: "border-purple-600",
  5: "border-pink-500",
  6: "border-cyan-500",
  7: "border-accent",
  8: "border-red-500",
  9: "border-orange-500",
};

const CaseStudySection = ({
  worldNumber,
  title,
  company,
  role,
  context,
  problem,
  roleScope,
  whatBuilt,
  impact,
  learning,
  icon,
}: CaseStudyProps) => {
  return (
    <motion.section
      id={`world-${worldNumber}`}
      className={`py-16 px-4 bg-gradient-to-b ${worldBgColors[worldNumber]}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* World Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Coin delay={0} />
            <span className="text-6xl">{icon}</span>
            <Coin delay={0.5} />
          </div>
          <h2 className="font-pixel text-lg md:text-xl text-foreground mb-2">
            WORLD {worldNumber}
          </h2>
          <h3 className="font-pixel text-sm md:text-base text-primary mb-2">{title}</h3>
          <p className="font-retro text-2xl text-muted-foreground">
            {company} | {role}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-6">
          {/* Context */}
          <motion.div
            className={`bg-card p-6 border-4 ${worldBorderColors[worldNumber]} shadow-pixel`}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-pixel text-xs mb-4 flex items-center gap-2">
              <span className="text-xl">📍</span> CONTEXT
            </h4>
            <p className="font-retro text-xl leading-relaxed">{context}</p>
          </motion.div>

          {/* Problem */}
          <motion.div
            className={`bg-card p-6 border-4 ${worldBorderColors[worldNumber]} shadow-pixel`}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-pixel text-xs mb-4 flex items-center gap-2">
              <span className="text-xl">⚠️</span> THE PROBLEM
            </h4>
            <ul className="space-y-2">
              {problem.map((item, i) => (
                <li key={i} className="font-retro text-xl flex items-start gap-2">
                  <span className="text-destructive">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Role & Scope */}
          <motion.div
            className={`bg-card p-6 border-4 ${worldBorderColors[worldNumber]} shadow-pixel`}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-pixel text-xs mb-4 flex items-center gap-2">
              <span className="text-xl">🎮</span> MY ROLE & SCOPE
            </h4>
            <ul className="space-y-2">
              {roleScope.map((item, i) => (
                <li key={i} className="font-retro text-xl flex items-start gap-2">
                  <span className="text-secondary">★</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What I Built */}
          <motion.div
            className={`bg-card p-6 border-4 ${worldBorderColors[worldNumber]} shadow-pixel`}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-pixel text-xs mb-4 flex items-center gap-2">
              <span className="text-xl">🔧</span> WHAT I BUILT
            </h4>
            <ul className="space-y-2">
              {whatBuilt.map((item, i) => (
                <li key={i} className="font-retro text-xl flex items-start gap-2">
                  <span className="text-accent">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Impact */}
          <motion.div
            className={`bg-card p-6 border-4 ${worldBorderColors[worldNumber]} shadow-pixel`}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="font-pixel text-xs mb-4 flex items-center gap-2">
              <span className="text-xl">🏆</span> IMPACT
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {impact.map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center p-3 bg-accent/20 border-2 border-accent"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="font-pixel text-lg md:text-xl text-accent">{item.value}</div>
                  <div className="font-retro text-sm text-muted-foreground mt-1">{item.metric}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Learning */}
          <motion.div
            className={`bg-foreground text-background p-6 border-4 ${worldBorderColors[worldNumber]} shadow-pixel`}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="font-pixel text-xs mb-4 flex items-center gap-2">
              <span className="text-xl">💡</span> KEY LEARNING
            </h4>
            <p className="font-retro text-xl italic">&ldquo;{learning}&rdquo;</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudySection;
