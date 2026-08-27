import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    type: 'Internship',
    title: 'Full Stack Development Internship',
    org: '[Company Name]',
    period: '[Start] — [End]',
    description:
      'Hands-on training in full-stack development with the MERN stack. Built and deployed real-world web applications, worked with REST APIs, and collaborated on production-grade features.',
  },
  {
    type: 'Training',
    title: 'Java & Spring Boot Training',
    org: '[Training Institute]',
    period: '[Start] — [End]',
    description:
      'In-depth training in core Java, advanced Java concepts, and the Spring Boot framework. Built backend services and REST APIs following industry best practices.',
  },
  {
    type: 'Hackathon',
    title: 'Hackathon Participant',
    org: '[Hackathon Name]',
    period: '[Year]',
    description:
      'Participated in a competitive hackathon, building a full-stack solution under a tight deadline. Collaborated with a team to design, develop, and present a working prototype.',
  },
  {
    type: 'Academic Project',
    title: 'Full-Stack Academic Projects',
    org: 'IMS Engineering College',
    period: '[Year] — [Year]',
    description:
      'Developed multiple full-stack projects as part of academic coursework, including a carbon footprint tracker, civic complaint platform, and smart parking system.',
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My journey"
          title="Experience & Learning"
          subtitle="Internships, training, hackathons, and hands-on development experience."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/40 via-white/10 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, transition: { duration: 0.4, delay: idx * 0.1 } }}
                  className="relative"
                >
                  {/* Timeline dot — centered on the line */}
                  <div className="absolute left-4 sm:left-1/2 top-3 w-3 h-3 rounded-full bg-accent-blue ring-4 ring-navy-950 -translate-x-1/2 z-10" />

                  {/* Card: left half on even, right half on odd (desktop) */}
                  <div
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${isLeft ? 'sm:pr-8 sm:text-right' : 'sm:ml-auto sm:pl-8'}`}
                  >
                    <div className="p-5 bg-navy-800/50 border border-white/10 rounded-xl card-hover">
                      <span className="inline-block px-2.5 py-1 text-xs font-mono text-accent-blue-light bg-accent-blue/10 rounded mb-3">
                        {exp.type}
                      </span>
                      <h3 className="text-white font-semibold text-lg mb-1">{exp.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">
                        {exp.org} · <span className="text-gray-500">{exp.period}</span>
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
