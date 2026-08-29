import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  {
    name: 'Eco Tracker',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    description:
      'Web application for tracking and analyzing carbon footprints with authentication, dashboard and environmental insights.',
    github: '[GITHUB_URL]',
    demo: '#',
    image: 'eco-tracker',
  },
  {
    name: 'CivicPulse AI',
    tech: ['MERN Stack', 'AI', 'REST APIs'],
    description:
      'AI-powered platform designed to help users raise civic complaints and track their status.',
    github: '[GITHUB_URL]',
    demo: '#',
    image: 'civicpulse',
  },
  {
    name: 'URL Shortener',
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    description:
      'Fast and secure URL shortening application with unique short links and database persistence.',
    github: '[GITHUB_URL]',
    demo: '#',
    image: 'url-shortener',
  },
 
];

const projectGradients = {
  'eco-tracker': 'from-emerald-500/15 to-teal-500/5',
  civicpulse: 'from-blue-500/15 to-cyan-500/5',
  'url-shortener': 'from-violet-500/15 to-purple-500/5',
  portfolio: 'from-amber-500/15 to-orange-500/5',
  'smart-parking': 'from-rose-500/15 to-pink-500/5',
};

function ProjectCard({ project, index }) {
  const gradient = projectGradients[project.image] || 'from-accent-blue/15 to-accent-purple/5';
  const initials = project.name.split(' ').map((w) => w[0]).join('');

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, transition: { duration: 0.4, delay: index * 0.08 } }}
      className="group bg-navy-800/50 border border-white/10 rounded-2xl overflow-hidden card-hover"
    >
      {/* Project image placeholder */}
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-white/10 font-mono uppercase tracking-wider">
            {initials}
          </span>
        </div>
        <div className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/10 transition-colors duration-300" />
        {/* Hover buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} GitHub`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/90 backdrop-blur text-white text-sm font-medium rounded-lg border border-white/10 hover:bg-accent-blue transition-colors"
          >
            <Github size={16} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} Live Demo`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/90 backdrop-blur text-white text-sm font-medium rounded-lg border border-white/10 hover:bg-accent-purple transition-colors"
          >
            <ExternalLink size={16} /> Demo
          </a>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-blue-light transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[3rem]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-mono text-gray-300 bg-navy-700/60 border border-white/5 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My work"
          title="Featured Projects"
          subtitle="A selection of full-stack applications I've designed, built, and deployed."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="[GITHUB_URL]"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-accent-blue/40 text-white font-medium rounded-lg transition-colors hover:bg-white/5"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
