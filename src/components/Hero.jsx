import { motion } from 'framer-motion';
import {
  Github, Linkedin, Mail, Code2, ArrowRight, FolderGit2, Layers, Server,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Code2, href: personalInfo.leetcode, label: 'LeetCode' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const techStack = ['Java', 'Spring Boot', 'React', 'Node.js', 'MongoDB'];

const floatingCards = [
  { icon: Code2, label: '200+ DSA Problems', position: 'top-left', delay: 0 },
  { icon: FolderGit2, label: '5+ Projects', position: 'top-right', delay: 0.5 },
  { icon: Server, label: 'Java & Spring Boot', position: 'bottom-left', delay: 1 },
  { icon: Layers, label: 'Full Stack Developer', position: 'bottom-right', delay: 1.5 },
];

const positionClasses = {
  'top-left': 'top-2 -left-3 sm:-left-6',
  'top-right': 'top-2 -right-3 sm:-right-6',
  'bottom-left': 'bottom-2 -left-3 sm:-left-6',
  'bottom-right': 'bottom-2 -right-3 sm:-right-6',
};

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 bg-white/5 border border-white/10 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-gray-300">Open to opportunities</span>
            </motion.div>

            <p className="text-gray-400 text-lg mb-2 font-mono">{personalInfo.tagline}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-[1.1] tracking-tight">
              {personalInfo.name.split(' ')[0]}{' '}
              <span className="text-gradient">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-300 font-medium mb-5">
              {personalInfo.role}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-7">
              {personalInfo.description}
            </p>

            {/* Tech stack strip */}
            <div className="flex flex-wrap items-center gap-2 mb-7">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-mono text-gray-300 bg-navy-800/60 border border-white/10 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-blue-light text-white font-medium rounded-lg transition-colors shadow-lg shadow-accent-blue/20"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-accent-blue/40 text-white font-medium rounded-lg transition-colors hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-accent-blue/40 hover:bg-white/5 transition-all"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right - profile image with floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem]">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-3xl border border-accent-blue/15 rotate-6" />
              <div className="absolute -inset-2 rounded-3xl border border-accent-purple/10 -rotate-3" />

              {/* Profile image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-navy-700 to-navy-900 border border-white/10">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-blue/10 to-accent-purple/10">
                  <span className="text-7xl font-bold text-gradient font-mono">AS</span>
                </div>
              </div>

              {/* Floating cards */}
              {floatingCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + card.delay * 0.2 }}
                    className={`absolute ${positionClasses[card.position]} animate-float`}
                    style={{ animationDelay: `${card.delay}s` }}
                  >
                    <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-navy-800/90 backdrop-blur-md border border-white/10 rounded-xl shadow-xl">
                      <Icon size={16} className="text-accent-blue-light" />
                      <span className="text-xs sm:text-sm text-white font-medium whitespace-nowrap">
                        {card.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
