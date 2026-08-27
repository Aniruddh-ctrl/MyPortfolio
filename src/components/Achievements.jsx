import { motion } from 'framer-motion';
import {
  Code2, Trophy, FolderGit2, BadgeCheck, TrendingUp, ArrowUpRight,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const iconMap = { Code2, Trophy, FolderGit2, BadgeCheck, TrendingUp };

const achievements = [
  {
    icon: 'Code2',
    title: 'Solved 200+ DSA Problems',
    description: 'Consistently practicing Data Structures and Algorithms across multiple platforms.',
  },
  {
    icon: 'Trophy',
    title: 'Participated in Hackathons',
    description: 'Competed in hackathons, building full-stack solutions under tight deadlines.',
  },
  {
    icon: 'FolderGit2',
    title: 'Built Multiple Full-Stack Projects',
    description: 'Developed and deployed production-grade MERN stack applications.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Completed Technical Certifications',
    description: 'Earned certifications from Accenture, Oracle, Google, AWS and more.',
  },
  {
    icon: 'TrendingUp',
    title: 'Active Development & Learning',
    description: 'Continuously learning new technologies and improving problem-solving skills.',
  },
];

function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements"
          subtitle="Key accomplishments that reflect my dedication to software engineering."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, transition: { duration: 0.4, delay: idx * 0.08 } }}
                className="p-6 bg-navy-800/50 border border-white/10 rounded-2xl card-hover"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-blue/10 mb-4">
                  <Icon size={22} className="text-accent-blue-light" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}

          {/* LeetCode / DSA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, transition: { duration: 0.4, delay: 0.4 } }}
            className="p-6 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 border border-accent-blue/20 rounded-2xl flex flex-col justify-center items-center text-center"
          >
            <span className="text-4xl font-bold text-gradient mb-1 tracking-tight">200+</span>
            <span className="text-white font-medium text-sm mb-2">DSA Problems Solved</span>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Consistently practicing DSA to improve problem-solving and coding skills.
            </p>
            <a
              href="[LEETCODE_URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white bg-accent-blue/20 hover:bg-accent-blue/30 border border-accent-blue/30 rounded-lg transition-colors"
            >
              View LeetCode
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
