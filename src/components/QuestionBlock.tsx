import { motion } from "framer-motion";
import { useState } from "react";

interface QuestionBlockProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const QuestionBlock = ({ children, onClick, className = "" }: QuestionBlockProps) => {
  const [isHit, setIsHit] = useState(false);

  const handleClick = () => {
    if (!isHit) {
      setIsHit(true);
      onClick?.();
      setTimeout(() => setIsHit(false), 300);
    }
  };

  return (
    <motion.button
      className={`relative w-16 h-16 question-block pixel-border cursor-pointer ${className}`}
      onClick={handleClick}
      animate={isHit ? { y: [0, -10, 0] } : {}}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="font-pixel text-2xl text-foreground">?</span>
      {children}
    </motion.button>
  );
};

export default QuestionBlock;
