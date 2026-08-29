import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'IMS Engineering College',
    board: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    period: '[2023] — [2027]',
    description:
      'Pursuing Bachelor of Technology in Computer Science & Engineering with a focus on full-stack development, data structures, algorithms, and software engineering principles.',
  },
];

function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Academic background" title="Education" />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/40 via-white/10 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, transition: { duration: 0.4, delay: idx * 0.1 } }}
                className="relative pl-12"
              >
                <div className="absolute left-4 top-2 w-3 h-3 rounded-full bg-accent-purple border-2 border-navy-950 -translate-x-1/2" />

                <div className="p-6 bg-navy-800/50 border border-white/10 rounded-xl card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-purple/10 flex-shrink-0">
                      <GraduationCap size={22} className="text-accent-purple-light" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{edu.degree}</h3>
                      <p className="text-accent-blue-light text-sm font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-gray-400 text-sm mb-2 flex items-center gap-1.5">
                        <MapPin size={14} />
                        {edu.board}
                      </p>
                      <span className="inline-block text-xs font-mono text-gray-500 mb-3">
                        {edu.period}
                      </span>
                      <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
