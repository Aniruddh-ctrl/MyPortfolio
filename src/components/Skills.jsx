import { motion } from 'framer-motion';
import {
  Terminal, Layout, Server, Database, Wrench, BrainCircuit,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const iconMap = { Terminal, Layout, Server, Database, Wrench, BrainCircuit };

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'Terminal',
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    title: 'AI / ML',
    icon: 'BrainCircuit',
    skills: ['Python', 'Machine Learning', 'Generative AI'],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I work with"
          title="Technical Skills"
          subtitle="Technologies and tools I use to build and ship software."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, transition: { duration: 0.4, delay: idx * 0.08 } }}
                className="p-6 bg-navy-800/50 border border-white/10 rounded-2xl card-hover"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent-blue/10">
                    <Icon size={20} className="text-accent-blue-light" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm text-gray-300 bg-navy-700/60 border border-white/5 rounded-md hover:border-accent-blue/30 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
