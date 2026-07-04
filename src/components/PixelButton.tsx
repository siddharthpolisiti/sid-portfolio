import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PixelButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

const variantClasses = {
  primary: "bg-primary text-primary-foreground hover:brightness-110",
  secondary: "bg-secondary text-secondary-foreground hover:brightness-110",
  accent: "bg-accent text-accent-foreground hover:brightness-110",
};

const sizeClasses = {
  sm: "px-3 py-1 text-xs",
  md: "px-6 py-2 text-sm",
  lg: "px-8 py-3 text-base",
};

const PixelButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: PixelButtonProps) => {
  return (
    <motion.button
      className={`
        font-pixel pixel-border
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default PixelButton;
