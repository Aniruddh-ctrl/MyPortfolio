import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, transition: { duration: 0.4 } }}
          className="inline-block text-xs font-mono text-accent-blue-light tracking-[0.2em] uppercase mb-4"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, transition: { duration: 0.4, delay: 0.08 } }}
        className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, transition: { duration: 0.4, delay: 0.16 } }}
          className="text-gray-400 text-base md:text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, transition: { duration: 0.4, delay: 0.24 } }}
        className="h-px w-20 bg-gradient-to-r from-transparent via-accent-blue/60 to-transparent mx-auto mt-6"
      />
    </div>
  );
}

export default SectionHeading;
