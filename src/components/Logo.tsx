import { motion } from 'motion/react';

export default function Logo({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M30 70 L50 30 L70 70 M40 55 L60 55"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        d="M20 50 Q50 10 80 50 Q50 90 20 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="10 5"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  );
}
