import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';

const certifications = [
  { title: 'UI/UX Designer', issuer: 'Accenture' },
  { title: 'Graphics Designer', issuer: 'Adobe' },
  { title: 'Web Designing', issuer: 'Udemy' },
  { title: 'Cloud Infrastructure', issuer: 'Oracle' },
  { title: 'Google AI/ML Course', issuer: 'Google' },
  { title: 'Generative AI with AWS', issuer: 'AWS' },
];

function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Professional certifications that validate my technical skills."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, transition: { duration: 0.4, delay: idx * 0.08 } }}
              className="flex items-center gap-4 p-5 bg-navy-800/50 border border-white/10 rounded-2xl card-hover"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-blue/10 flex-shrink-0">
                <BadgeCheck size={22} className="text-accent-blue-light" />
              </div>
              <div>
                <h3 className="text-white font-medium text-base leading-tight">{cert.title}</h3>
                <p className="text-gray-400 text-sm mt-0.5">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
