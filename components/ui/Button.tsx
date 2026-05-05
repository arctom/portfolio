"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "ghost",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none link";

  const variantClasses = {
    primary:
      "bg-gray-900 dark:bg-white text-white dark:text-surface hover:bg-gray-800 dark:hover:bg-white/90 hover:scale-105 active:scale-95",
    ghost:
      "border border-gray-300 dark:border-white/20 text-gray-600 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hover:border-gray-500 dark:hover:border-white/40 hover:scale-105 active:scale-95",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (href.startsWith("#")) {
      return (
        <motion.a href={href} className={classes} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
