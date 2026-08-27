import { useMemo } from "react";
import { motion } from "framer-motion";
import PixelButton from "./PixelButton";
import QuestionBlock from "./QuestionBlock";
import Coin from "./Coin";
import PixelCoffee from "./PixelCoffee";
import PixelHeart from "./PixelHeart";

const EMAIL = "siddharth.polisiti@gmail.com";
const PHONE = "+34-613040108";
const LINKEDIN = "https://www.linkedin.com/in/siddharthpolisiti/";
const RESUME = "/resume.pdf";

const ContactSection = () => {
  // Generated once — regenerating on every render made the stars jump around.
  const stars = useMemo(
    () =>
      [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 1 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    []
  );

  const handleEmailClick = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  const handleLinkedInClick = () => {
    window.open(LINKEDIN, "_blank", "noopener,noreferrer");
  };

  const handleResumeClick = () => {
    window.open(RESUME, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-20 px-4 bg-foreground min-h-[60vh]">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{ left: star.left, top: star.top }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Bonus Level Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-4 mb-4">
            <Coin delay={0} />
            <QuestionBlock className="transform scale-75" />
            <Coin delay={0.5} />
          </div>
          <h2 className="font-pixel text-xl md:text-2xl text-accent mb-4">
            BONUS LEVEL
          </h2>
          <p className="font-retro text-2xl text-primary-foreground">
            Let's connect and build something amazing!
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="bg-card pixel-border p-8 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="font-pixel text-sm text-foreground mb-6">
            PLAYER STATS
          </div>

          <div className="space-y-4 mb-8">
            <div className="font-retro text-xl">
              <span className="text-muted-foreground">📍 Location:</span>{" "}
              <span className="text-foreground">Barcelona, Spain</span>
            </div>
            <div className="font-retro text-xl">
              <span className="text-muted-foreground">📧 Email:</span>{" "}
              <a href={`mailto:${EMAIL}`} className="text-foreground underline underline-offset-4 hover:text-primary">
                {EMAIL}
              </a>
            </div>
            <div className="font-retro text-xl">
              <span className="text-muted-foreground">📱 Phone:</span>{" "}
              <a href={`tel:${PHONE.replace(/-/g, "")}`} className="text-foreground underline underline-offset-4 hover:text-primary">
                {PHONE}
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PixelButton onClick={handleEmailClick} variant="primary" size="lg">
              SEND MESSAGE
            </PixelButton>
            <PixelButton onClick={handleLinkedInClick} variant="accent" size="lg">
              LINKEDIN
            </PixelButton>
            <PixelButton onClick={handleResumeClick} variant="primary" size="lg">
              RESUME
            </PixelButton>
          </div>

          {/* Game Over style */}
          <motion.div
            className="mt-8 font-pixel text-xs text-muted-foreground"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            INSERT COIN TO CONTINUE...
          </motion.div>
        </motion.div>

        {/* Footer Credits */}
        <motion.div
          className="text-center mt-12 font-retro text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Both lines at text-3xl: VT323 is a condensed pixel face, so at
              the previous text-sm the 44px icons dwarfed the words. 30px is
              where the glyphs and the icons carry equal weight — 24px still
              reads as icons-with-a-caption, 36px tips the other way. The
              copyright line matches so the footer stays one block. */}
          <p className="text-3xl">© 2026 SIDDHARTH POLISITI</p>
          <p className="text-3xl mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>MADE WITH</span>
            <PixelHeart />
            <span>AND LOTS OF</span>
            <PixelCoffee />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
