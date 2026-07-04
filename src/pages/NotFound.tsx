import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import PixelButton from "@/components/PixelButton";
import PixelCloud from "@/components/PixelCloud";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center sky-gradient overflow-hidden">
      {/* Clouds */}
      <PixelCloud className="absolute top-20 left-[10%]" size="lg" delay={0} />
      <PixelCloud className="absolute top-32 right-[15%]" size="md" delay={1} />

      <motion.div
        className="bg-card pixel-border p-8 md:p-12 text-center max-w-lg mx-4 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-6xl mb-4"
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💀
        </motion.div>
        <h1 className="font-pixel text-3xl md:text-4xl text-primary mb-4">
          GAME OVER
        </h1>
        <p className="font-pixel text-lg text-destructive mb-2">404</p>
        <p className="font-retro text-xl text-muted-foreground mb-8">
          The level you're looking for doesn't exist!
        </p>
        <Link to="/">
          <PixelButton variant="accent" size="lg">
            CONTINUE?
          </PixelButton>
        </Link>
        <motion.p
          className="font-pixel text-xs text-muted-foreground mt-6"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          INSERT COIN...
        </motion.p>
      </motion.div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-24 ground-pattern brick-pattern" />
      <div className="absolute bottom-24 left-0 right-0 h-4 bg-secondary" />
    </div>
  );
};

export default NotFound;
