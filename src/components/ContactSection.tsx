import { motion } from "framer-motion";
import PixelButton from "./PixelButton";
import QuestionBlock from "./QuestionBlock";
import Coin from "./Coin";

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:siddharth.polisiti@edu.em-lyon.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/siddharthpolisiti/", "_blank");
  };

  return (
    <section className="relative py-20 px-4 bg-foreground min-h-[60vh]">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
              <span className="text-foreground">siddharth.polisiti@edu.em-lyon.com</span>
            </div>
            <div className="font-retro text-xl">
              <span className="text-muted-foreground">📱 Phone:</span>{" "}
              <span className="text-foreground">+34-613040108</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PixelButton onClick={handleEmailClick} variant="primary" size="lg">
              SEND MESSAGE
            </PixelButton>
            <PixelButton onClick={handleLinkedInClick} variant="accent" size="lg">
              LINKEDIN
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
          <p>© 2024 SIDDHARTH POLISITI</p>
          <p className="text-sm mt-2">MADE WITH ❤️ AND LOTS OF ☕</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
