
"use client";
import { motion } from "framer-motion";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function TextAnimation() {
  const text = "Decálogo de Ética del Ingeniero en Sistemas";

  return (
    <>
      <motion.span
        className="text-3xl font-semibold text-gray-700/80"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        aria-hidden
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={defaultAnimations}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </>
  );
}
