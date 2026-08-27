import { motion } from 'framer-motion';
import { Code2, FolderGit2, GraduationCap, BadgeCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';

const iconMap = { Code2, FolderGit2, GraduationCap, BadgeCheck };

const aboutStats = [
  { icon: 'Code2', label: 'DSA Problems', value: '200+' },
  { icon: 'FolderGit2', label: 'Projects', value: '5+' },
  { icon: 'GraduationCap', label: 'CGPA', value: '7.9' },
  { icon: 'BadgeCheck', label: 'Certifications', value: '6+' },
];

const techHighlights = [
  'Java', 'Spring Boot', 'React', 'Node.js', 'MongoDB', 'SQL',
];

function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, transition: { duration: 0.5 } }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm a <span className="text-white font-medium">B.Tech Computer Science</span> undergraduate
              passionate about full-stack development and building scalable web applications.
              My core strengths lie in <span className="text-accent-blue-light">Java</span>,{' '}
              <span className="text-accent-blue-light">Spring Boot</span>, and the MERN stack
              (React, Node.js, Express, MongoDB).
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              I enjoy solving real-world problems through clean, efficient software. From
              designing REST APIs to building responsive frontends, I'm comfortable working
              across the entire stack. I've solved <span className="text-white font-medium">200+ DSA problems</span>{' '}
              and built multiple full-stack projects that reflect my interest in backend and
              software engineering.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              I'm actively seeking software engineering opportunities where I can contribute,
              learn, and grow — especially in product companies, fintech, and IT organizations.
            </p>

            {/* Tech highlights */}
            <div className="flex flex-wrap gap-2 pt-3">
              {techHighlights.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-mono text-gray-300 bg-navy-800/60 border border-white/10 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, transition: { duration: 0.5, delay: 0.2 } }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {aboutStats.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-6 bg-navy-800/50 border border-white/10 rounded-2xl card-hover"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-blue/10 mb-4">
                    <Icon size={22} className="text-accent-blue-light" />
                  </div>
                  <span className="text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                  <span className="text-sm text-gray-400 mt-1">{stat.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
