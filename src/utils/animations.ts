import { Variants } from "framer-motion";

export const panelVariants: Variants = {
  hidden: { opacity: 0, x: -40, filter: "blur(5px)" },
  enter: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    x: 40,
    filter: "blur(5px)",
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
