import { motion } from 'motion/react';

export default function Marquee({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap bg-green-800 text-white py-2 ${className}`}>
      <motion.div
        className="inline-block"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <span className="mx-4 text-sm font-medium uppercase tracking-widest">{text}</span>
        <span className="mx-4 text-sm font-medium uppercase tracking-widest">{text}</span>
        <span className="mx-4 text-sm font-medium uppercase tracking-widest">{text}</span>
        <span className="mx-4 text-sm font-medium uppercase tracking-widest">{text}</span>
      </motion.div>
    </div>
  );
}
